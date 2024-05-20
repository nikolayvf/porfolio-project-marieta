import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../resources/projects.json";
import "./ProjectDetail.styles.css";

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

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.projects.find(
    (p) => p.id === parseInt(projectId, 10)
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.projectImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImageKey = project.projectImages[currentImageIndex]
    .split("/")
    .slice(1)
    .join("/");
  const currentImageSrc = images[currentImageKey];

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <div className="carousel">
        <div className="carousel-main">
          <button
            onClick={handlePrevImage}
            className="carousel-arrow left-arrow"
          >
            ◀
          </button>
          <img
            src={currentImageSrc}
            alt={`View of ${project.name}`}
            className="main-image"
          />
          <button
            onClick={handleNextImage}
            className="carousel-arrow right-arrow"
          >
            ▶
          </button>
        </div>
        <div className="carousel-thumbnails">
          {project.projectImages.map((imagePath, index) => {
            const imageKey = imagePath.split("/").slice(1).join("/");
            const imageSrc = images[imageKey];
            return (
              <img
                key={index}
                src={imageSrc}
                alt={`Thumbnail ${index + 1} of ${project.name}`}
                className={`thumbnail ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="project-info">
        <p>
          <strong>Location:</strong> {project.location}
        </p>
        <p>
          <strong>Client:</strong> {project.client}
        </p>
        <p>
          <strong>Architect:</strong> {project.architect}
        </p>
        <p>
          <strong>Visualizer:</strong> {project.visualizer}
        </p>
        <p>
          <strong>Investor:</strong> {project.investor}
        </p>
        <p>
          <strong>Type:</strong> {project.projectType}
        </p>
      </div>
    </div>
  );
}

export default ProjectDetail;
