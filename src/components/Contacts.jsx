import React from "react";
import "./Contacts.styles.css";

function Contacts() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us!</p>
      <form
        id="contact-form"
        className="contact-form"
        data-google-recaptcha-key="6LfMu0kaAAAAAGK8ZQIUqVgpfHsqjSwzUWxUur5g"
        action="https://visioaxis.com/send-contact-message"
        method="POST"
      >
        <input
          type="hidden"
          name="_token"
          value="qaV4nrefv2qeruwMWshwEHAUyylGeYIOGlNV4lMl"
        />
        <input
          type="hidden"
          name="recaptcha_response"
          id="recaptcha-response"
        />
        <div>
          <input type="text" name="name" placeholder="Name*" required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email*" required />
        </div>
        <div>
          <input type="text" name="subject" placeholder="Subject*" required />
        </div>
        <div>
          <textarea name="message" placeholder="Message*" required></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Contacts;
