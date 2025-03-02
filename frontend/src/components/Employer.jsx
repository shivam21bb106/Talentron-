import React, { useState } from 'react';
import '../styles/employers.css';
import PopupMessage from './PopupMessage';


const EmployersForm1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // To define success or error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setMessage("");
  };

  const validateForm = () => {
    const { name, email, contact, website, requirements } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Company Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!contact.trim()) newErrors.contact = "Contact No is required";
    if (!website.trim()) newErrors.website = "Website URL is required";
    if (!requirements.trim()) newErrors.requirements = "Requirements are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage("Please fill all required fields.");
      setMessageType("error");
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    try {
      const response = await fetch("https://shivam21bbbb.pythonanywhere.com/employers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setMessageType("success");
        setFormData({
          name: "",
          email: "",
          contact: "",
          website: "",
          requirements: "",
        });
      } else {
        setMessage("Error submitting the form. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting the form.");
      setMessageType("error");
    }
  };

  return (
    <div className="employers-form-container">
      <PopupMessage message={message} type={message.includes('success') ? "success" : "error"} onClose={() => setMessage("")} />
      <h2 className="employers-form-heading">
        Ready to Hire? Share Your Requirements with Us
      </h2>
      <form className="employers-form" onSubmit={handleSubmit}>
  <h2 className="form-title">Looking to Hire? Let’s Connect!</h2>
  <p>Fill out the form, and a Talentron representative will reach out to discuss your hiring needs.</p>

  <div className="form-group3">
    <label>Company Name*</label>
    <input type="text" name="name" placeholder="Enter Company Name" value={formData.name} onChange={handleInputChange} />
  </div>

  <div className="form-group3">
    <label>Email*</label>
    <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} />
  </div>

  <div className="form-group3">
    <label>Contact No*</label>
    <input type="text" name="contact" placeholder="Enter Phone No" value={formData.contact} onChange={handleInputChange} />
  </div>

  <div className="form-group3">
    <label>Website*</label>
    <input type="text" name="website" placeholder="Enter Website URL" value={formData.website} onChange={handleInputChange} />
  </div>

  <div className="form-group3 full-width">
  <label>High-Level Requirements*</label>
  <textarea
    name="requirements"
    placeholder="Enter Your Requirements"
    value={formData.requirements}
    onChange={handleInputChange}
    className="requirements-textarea"
  ></textarea>
</div>

  <button type="submit" className="form-submit-button">Submit</button>
</form>


    </div>
  );
};

export default EmployersForm1;
