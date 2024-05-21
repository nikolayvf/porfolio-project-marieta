import React from "react";
import projectsData from "../resources/projects.json";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Projects.styles.css";

// Function to dynamically import images
const importImages = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importImages(
  require.context("../resources", true, /\.(jpg|jpeg|png)$/)
);

function Projects() {
  const navigate = useNavigate(); // Create a navigate function using the hook

  // Function to handle clicking on a project card
  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`); // Use the navigate function to redirect
  };

  return (
    <div className="projects-container">
      {projectsData.projects.map((project, index) => {
        const imageKey = project.projectImages[0].split("/").slice(1).join("/"); // Remove 'resources/' prefix
        const imageSrc = images[imageKey];

        return (
          <div
            key={index}
            className="project-card"
            onClick={() => handleProjectClick(project.id)} // Add the onClick event handler
            style={{ cursor: "pointer" }} // Optional: change the cursor on hover to indicate clickable
          >
            <div className="project-image">
              <img src={imageSrc} alt={project.name} />
              <div className="overlay">
                <div className="overlay-text">
                  <h2>{project.name}</h2>
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
