import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    setSuccessMessage("Message sent successfully!");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <form id="contactForm" onSubmit={sendMail}>
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            <div className="input-container">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Subject"
              />
            </div>
            <div className="message-container">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Drop us a message here and we will get back to you shortly"
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
