// import React from "react";
// import heroImage from "../resources/hero-image.jpg";
// import "./Contacts.styles.css";

// function Contacts() {
//   return (
//     <div className="contacts-container">
//       <div className="contact-info">
//         <h1>Contact Us</h1>
//         <p>Have questions? Reach out to us!</p>
//         <form
//           id="contact-form"
//           className="contact-form"
//           data-google-recaptcha-key="6LfMu0kaAAAAAGK8ZQIUqVgpfHsqjSwzUWxUur5g"
//           action="https://visioaxis.com/send-contact-message"
//           method="POST"
//         >
//           <input
//             type="hidden"
//             name="_token"
//             value="qaV4nrefv2qeruwMWshwEHAUyylGeYIOGlNV4lMl"
//           />
//           <input
//             type="hidden"
//             name="recaptcha_response"
//             id="recaptcha-response"
//           />
//           <div>
//             <input type="text" name="name" placeholder="Name*" required />
//           </div>
//           <div>
//             <input type="email" name="email" placeholder="Email*" required />
//           </div>
//           <div>
//             <input type="text" name="subject" placeholder="Subject*" required />
//           </div>
//           <div>
//             <textarea name="message" placeholder="Message*" required></textarea>
//           </div>
//           <div>
//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//       </div>
//       <div className="profile-picture">
//         <img src={heroImage} alt="Profile" />
//       </div>
//     </div>
//   );
// }

// export default Contacts;

import React, { useRef } from "react";
import heroImage from "../resources/hero-image.jpg";
import "./Contacts.styles.css";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9348l0s",
        "template_d5pn0pk",
        form.current,
        "9bAfQx0fw7snlihsQ"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="contacts-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us!</p>
        <form
          ref={form}
          id="contact-form"
          className="contact-form"
          onSubmit={sendEmail}
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
      <div className="profile-picture">
        <img src={heroImage} alt="Profile" />
      </div>
    </div>
  );
}

export default Contacts;
