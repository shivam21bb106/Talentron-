const User = require('../models/usermodel');

// Controller to handle user submission
exports.submitUser = async (req, res) => {
    const { name, email } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: 'Email already exists' });
        }

        // Save the new user
        const newUser = new User({ name, email });
        await newUser.save();
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'An error occurred' });
    }
};
