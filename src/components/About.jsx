import React from "react";
import "./About.styles.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro-text">Find out more about our team and mission.</p>
      <div className="profile">
        <h2>John Doe</h2>
        <p className="profile-text">
          John Doe is a highly skilled 3D Designer with over a decade of
          experience in creating stunning 3D architecture models. His expertise
          spans across residential, commercial, and industrial projects,
          bringing each vision to life with exceptional detail and accuracy.
        </p>
        <p className="profile-text">
          John has a keen eye for design and a passion for transforming
          blueprints into realistic 3D models. His work not only enhances the
          visualization process for clients but also aids architects and
          builders in understanding complex designs.
        </p>
        <p className="profile-text">
          Throughout his career, John has worked with a variety of clients, from
          individual homeowners to large corporations, delivering high-quality
          models that exceed expectations. His dedication to his craft and
          innovative approach make him a valuable asset to any project.
        </p>
      </div>
    </div>
  );
}

export default About;
