import React, { useState } from "react";
import { validateEmail } from '../../utils/validators';
import "../assets/index.css";

function Contact() {
  // Set up state for form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update errors for the current input
    const updatedErrors = { ...errors, [name]: value.trim() === '' ? 'Input is required.' : null };
    setErrors(updatedErrors);
    // Update form data with the new value
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new errors object based on the form data
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      if (formData[key].trim() === '') {
        acc[key] = 'Input field is required.';
      } else if (key === 'email' && !validateEmail(formData[key])) {
        acc[key] = 'Invalid email address.';
      }
      return acc;
    }, {});
    setErrors(newErrors);

    // If no errors, log the form data
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  // Render the contact form
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contact</h3>
      {['name', 'email', 'message'].map((field) => (
        <div key={field}>
          <p>{field[0].toUpperCase() + field.slice(1)}:</p>
          {field !== 'message' ? (
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              className={`${field}-input`}
              value={formData[field]}
              onChange={handleInputChange}
              required
            />
          ) : (
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          )}
          {errors[field] && <span className="error">{errors[field]}</span>}
        </div>
      ))} 
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
