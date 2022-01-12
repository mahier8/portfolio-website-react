import React, { useState } from "react";
import "./contact.scss";

function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <a href="mailto:mahier.sydow8@gmail.com">
            <button type="submit">Send</button>
          </a>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
