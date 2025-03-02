import React, { useState } from 'react';
import '../styles/trainerForm.css';
import PopupMessage from "./PopupMessage"; // Ensure this is correctly imported

const TrainersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    website: "",
    linkedin: "",
    expert: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, contact, email, linkedin, expert } = formData;

    if (!name.trim()) {
      setMessage({ text: "Full Name is required.", type: "error" });
      return false;
    }
    if (!contact.trim()) {
      setMessage({ text: "Contact is required.", type: "error" });
      return false;
    }
    if (!email.trim()) {
      setMessage({ text: "Email is required.", type: "error" });
      return false;
    }
    if (!linkedin.trim()) {
      setMessage({ text: "LinkedIn profile is required.", type: "error" });
      return false;
    }
    if (!expert.trim()) {
      setMessage({ text: "Expertise is required.", type: "error" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://shivam21bbbb.pythonanywhere.com/trainers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ text: "Form submitted successfully!", type: "success" });
        setFormData({
          name: "",
          contact: "",
          email: "",
          website: "",
          linkedin: "",
          expert: "",
        });
      } else {
        setMessage({ text: "Error submitting the form. Please try again.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "An error occurred while submitting the form.", type: "error" });
    }
  };

  return (
   <form className="trainer-form" onSubmit={handleSubmit}>
  <PopupMessage message={message.text} type={message.type} onClose={() => setMessage({ text: "", type: "" })} />

  <h2 className="trainer-form-title">Ready to Join our team? Explore Exciting opportunities with us</h2>
  <p>Kindly complete the training partners form, and a Talentron representative will get in touch with you shortly.</p>

  <div className="form-grid">
    <div className="form-group2">
      <label>Full Name*</label>
      <input type="text" name="name" placeholder="Enter Full Name" value={formData.name} onChange={handleInputChange} />
    </div>
    
    <div className="form-group2">
      <label>Contact*</label>
      <input type="text" name="contact" placeholder="Enter Contact" value={formData.contact} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>Email*</label>
      <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>Website (if Company)</label>
      <input type="text" name="website" placeholder="Enter Website" value={formData.website} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>LinkedIn*</label>
      <input type="text" name="linkedin" placeholder="Enter LinkedIn Profile" value={formData.linkedin} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>Expert In*</label>
      <select name="expert" value={formData.expert} onChange={handleInputChange} className="expertise-dropdown">
        <option value="">Select Expertise</option>
        <option value="Full Stack Development">Full Stack Development</option>
        <option value="Frontend Development">Frontend Development</option>
        <option value="Backend Development">Backend Development</option>
        <option value="Software Testing">Software Testing</option>
        <option value="Data Engineering">Data Engineering</option>
        <option value="Test Automation">Test Automation</option>
        <option value="Robotic Process Automation">Robotic Process Automation</option>
      </select>
    </div>
  </div>

  <button type="submit" className="form-submit-button">Submit</button>
</form>

  );
};

export default TrainersForm;
