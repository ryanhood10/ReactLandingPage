import React, { useState } from "react";
import { validateEmail } from '../utils/validators';
import "../assets/index.css";



function Contact() {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contact</h3>
      {/* ... */}
    </form>
  );
}

export default Contact;
