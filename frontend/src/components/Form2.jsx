import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/global.css';
import TrainersForm from './Trainer';
import EmployersForm from './employer';

const Form2 = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state_id: '',
    city_id: '',
    city2: '',
    email: '',
    notice_period: '',
    expected_salary: '',
    upload_file: null,
  });

  const [fileError, setFileError] = useState('');
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [isStatesLoaded, setIsStatesLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('jobdata');
  const [formSubmissionMessage, setFormSubmissionMessage] = useState('');
  const fileInputRef = useRef(null);
  const formEndpoint = 'https://shivam21bbbb.pythonanywhere.com/jobseekers';

  const fetchStates = async () => {
    try {
      const response = await axios.get('https://shivam21bbbb.pythonanywhere.com/statelist');
      if (response.status === 200 && Array.isArray(response.data)) {
        setStateList(response.data);
        setIsStatesLoaded(true);
      } else {
        console.error('Invalid state data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching state list:', error);
    }
  };

  const handleStateChange = async (e) => {
    const selectedStateId = e.target.value;
    setFormData({ ...formData, state_id: selectedStateId, city_id: '' });

    if (selectedStateId) {
      try {
        const response = await axios.get(`https://shivam21bbbb.pythonanywhere.com/citylist/${selectedStateId}`);
        if (response.status === 200 && Array.isArray(response.data)) {
          setCityList(response.data);
        } else {
          console.error('Invalid city data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching city list:', error);
      }
    } else {
      setCityList([]);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        setFileError('File size must not exceed 3 MB.');
        setFormData({ ...formData, upload_file: null });
        fileInputRef.current.value = '';

        // Clear the error message after 5 seconds
        setTimeout(() => {
          setFileError('');
        }, 5000);
      } else {
        setFileError('');
        setFormData({ ...formData, upload_file: file });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmissionMessage('');

    if (!formData.city_id || !formData.state_id) {
      alert('Please enter both state and city.');
      return;
    }

    const submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: submissionData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          phone: '',
          state_id: '',
          city_id: '',
          city2: '',
          email: '',
          notice_period: '',
          expected_salary: '',
          upload_file: null,
        });
        fileInputRef.current.value = '';
        setFormSubmissionMessage('Your form is submitted successfully!');

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormSubmissionMessage('');
        }, 5000);
      } else {
        console.log('Form submission failed');
        setFormSubmissionMessage('Form submission failed. Please try again.');

        // Clear failure message after 5 seconds
        setTimeout(() => {
          setFormSubmissionMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormSubmissionMessage('An error occurred while submitting the form.');

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormSubmissionMessage('');
      }, 5000);
    }
  };

  const handleTabClick = (tab) => {
    console.log(`Setting active tab to: ${tab}`);
    setActiveTab(tab);
  };

  useEffect(() => {
    if (props.showForm && !isStatesLoaded) {
      fetchStates();
    }
  }, [props.showForm, isStatesLoaded]);
  return (
    
    <div className="formcontainer1711">

       
      {props.showForm && (
        <>
        <button className="close-button" onClick={() => props.setShowForm(false)}>✖</button>
       

          <div className="job-box">
            <div
              className="seek"
            style={{ backgroundColor: activeTab === 'jobdata' ? 'white' : '' }}
            onClick={() => handleTabClick('jobdata')}
            >
              Job Seekers
            </div>
            <div
              className="seek"
            style={{ backgroundColor: activeTab === 'trainers' ? 'white' : '' }}
            onClick={() => handleTabClick('trainers')}
            >
            <img src='/images/trainer.png'/>
              Trainers
            </div>
            <div
              className="seek"
            style={{ backgroundColor: activeTab === 'employers' ? 'white' : '' }}
            onClick={() => handleTabClick('employers')}
            >
            <img src='/images/employer.png'/>
              Employers
            </div>
          </div>
        {activeTab === 'jobdata' && (
          <div className="job-form1">
            <h2>Ready to Work in our company ?</h2>
            <form className="job-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            <div className="form-group">
                <label>Contact Number*</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            <div className="form-group">
                <label>Preferred Job Location*</label>
                <select
                  name="state_id"
                  value={formData.state_id}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {stateList.map((stateItem) => (
                    <option key={stateItem.id} value={stateItem.id}>
                      {stateItem.new_state_name}
                    </option>
                  ))}
                </select>
                <select
                  name="city_id"
                  value={formData.city_id}
                  onChange={(e) => setFormData({ ...formData, city_id: e.target.value })}
                  disabled={!formData.state_id}
                >
                  <option value="">Select District</option>
                  {cityList.map((cityItem) => (
                    <option key={cityItem.id} value={cityItem.id}>
                      {cityItem.new_city_name}
                    </option>
                  ))}
                </select>
              </div>
            <div className="form-group">
                <label>City*</label>
                <input
                  type="text"
                  name="city2"
                  placeholder="Enter City/Town/Village"
                  value={formData.city2}
                  onChange={handleInputChange}
                />
              </div>
            <div className="form-group">
                <label>Email*</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            <div className="form-group">
              <label>Notice Period*</label>
              <input
                type="text"
                name="notice_period"
                placeholder="Enter notice period"
                value={formData.notice_period}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Expected Salary*</label>
              <input
                type="text"
                name="expected_salary"
                placeholder="Enter expected salary"
                value={formData.expected_salary} 
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
  <label>Upload Resume*</label>
  <input 
    type="file"
    ref={fileInputRef}
    accept=".png,.jpg,.pdf"
    onChange={handleFileUpload}
    className="custom-file-input"
  />
  {fileError && <p className="error-message">{fileError}</p>}
</div>

            <button type="submit" className="form-submit-button">Submit</button>
            {formSubmissionMessage && (
              <p className="submission-message">{formSubmissionMessage}</p>
            )}
            </form>
            </div>
          )}
        {activeTab === 'trainers' && <TrainersForm />}
        {activeTab === 'employers' && <EmployersForm />}
        </>
      )}
    </div>
  
  );
};

export default Form2;
