import React, { useState } from "react";
import "./contactus.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import background from "./background.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the functionality to handle form submission
    console.log(formData);
  };

  return (
    <div
      className="contact-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="contact-info">
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Address, City, Country
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> contact@email.com
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} /> +00 0000 000 000
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} /> Mon - Fri 8:00 AM to 5:00 PM
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form className="contact" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="text-box"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="text-box"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="submit"
            name="submit"
            className="send-btn"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
