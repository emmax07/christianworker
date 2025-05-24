import { useState } from "react";
import "./RegisterChurch.css";

const RegisterChurch = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    setSuccessMessage("Message sent successfully!");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Register or Update Church Profile</h1>

        <p>
          Please fill out the form below to register or update your congregation
          to include your profile in the directory. Thank you!
        </p>
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
                placeholder="Name of Congregation"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                id="members"
                name="members"
                required
                placeholder="Members"
              />
            </div>

            <div className="message-container">
              <textarea
                id="meeting"
                name="meeting"
                required
                placeholder="Meeting Place"
              ></textarea>
            </div>
            <div className="message-container">
              <textarea
                id="sunday"
                name="sunday"
                required
                placeholder="Sunday Meeting"
              ></textarea>
            </div>
            <div className="message-container">
              <textarea
                id="midweek"
                name="midweek"
                required
                placeholder="Midweek Meeting"
              ></textarea>
            </div>
            <div className="message-container">
              <textarea
                id="contact"
                name="contact"
                required
                placeholder="Contacts"
              ></textarea>
            </div>
            <div className="input-container">
              <input
                type="website"
                id="website"
                name="website"
                required
                placeholder="Website"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterChurch;
