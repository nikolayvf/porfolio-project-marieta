import React, { useEffect } from "react";
import img01 from "../resources/01_position.png";
import img02 from "../resources/02_position.png";
import img03 from "../resources/03_position.png";
import img04 from "../resources/04_position.png";
import img05 from "../resources/05_position.png";
import img06 from "../resources/06_position.png";
import img07 from "../resources/07_position_final.png";
import logo from "../resources/DECORET_LOGO.png";
import "./Home.styles.css"; // Import the CSS file

function Home() {
  useEffect(() => {
    const imageContainers = document.querySelectorAll(".image-container");
    imageContainers.forEach((container, index) => {
      let delay;
      if (index === 6) {
        delay = 2800; // 2.8 seconds for 07_position_final
      } else if (index === 7) {
        delay = 3500; // 3.5 seconds for DECORET_LOGO
      }

      if (index >= 6) {
        setTimeout(() => {
          container.classList.add("visible");
        }, delay);
      }
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="image-container image01 visible">
        <img src={img01} alt="Position 01" className="hero-image" />
      </div>
      <div className="image-container image02 visible">
        <img src={img02} alt="Position 02" className="hero-image" />
      </div>
      <div className="image-container image03 visible">
        <img src={img03} alt="Position 03" className="hero-image" />
      </div>
      <div className="image-container image04 visible">
        <img src={img04} alt="Position 04" className="hero-image" />
      </div>
      <div className="image-container image05 visible">
        <img src={img05} alt="Position 05" className="hero-image" />
      </div>
      <div className="image-container image06 visible">
        <img src={img06} alt="Position 06" className="hero-image" />
      </div>
      {/* New elements start here */}
      <div className="image-container image07">
        <img src={img07} alt="Position Final" className="hero-image" />
      </div>
      <div className="image-container image08">
        <img src={logo} alt="Logo" className="hero-logo" />
      </div>
      {/* New elements end here */}
    </div>
  );
}

export default Home;
