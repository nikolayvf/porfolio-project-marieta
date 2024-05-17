import React, { useEffect } from "react";
import heroImage from "../resources/hero-image.jpg";
import "./Home.styles.css"; // Import the CSS file

function Home() {
  useEffect(() => {
    const heroText = document.querySelector(".hero-text");
    heroText.classList.add("visible");
  }, []);

  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
    </div>
  );
}

export default Home;
