import React from "react";
import "./Footer.styles.css"; // Make sure to have this CSS file in the same directory

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="icon"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
      </div>
      <div className="footer-content">
        <p>© 2024 Your Company Name. All rights reserved.</p>
        <p>Privacy Policy | Terms of Use | Disclaimer</p>
      </div>
    </footer>
  );
}

export default Footer;
