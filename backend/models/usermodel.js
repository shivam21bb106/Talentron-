const mongoose = require('mongoose');

// Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Define Model
const User = mongoose.model('User', userSchema);

module.exports = User;
