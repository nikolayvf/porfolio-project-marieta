import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../resources/projects.json";
import "./ProjectDetail.styles.css";

// Function to dynamically import images
const importImages = (r) => {
  let images = {};
  r.keys().forEach((item) => {
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

  // Memoize the functions using useCallback
  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.projectImages.length - 1 : prevIndex - 1
    );
  }, [project.projectImages.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.projectImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [project.projectImages.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevImage, handleNextImage]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const currentImageKey = project.projectImages[currentImageIndex];
  const currentImageSrc = images[currentImageKey];

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <div className="carousel">
        <div className="carousel-main">
          <button
            onClick={handlePrevImage}
            className="carousel-arrow left-arrow"
            aria-label="Previous Image"
          >
            ◀
          </button>
          <div className="image-container">
            <img
              src={currentImageSrc}
              alt={`View of ${project.name}`}
              className="main-image"
            />
          </div>
          <button
            onClick={handleNextImage}
            className="carousel-arrow right-arrow"
            aria-label="Next Image"
          >
            ▶
          </button>
        </div>
        <div className="carousel-thumbnails">
          {project.projectImages.map((imagePath, index) => {
            const imageSrc = images[imagePath];
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
        {project.client && (
          <p>
            <strong>Client:</strong> {project.client}
          </p>
        )}
        {project.architect && (
          <p>
            <strong>Architect:</strong> {project.architect}
          </p>
        )}
        {project.visualizer && (
          <p>
            <strong>Visualizer:</strong> {project.visualizer}
          </p>
        )}
        {project.investor && (
          <p>
            <strong>Investor:</strong> {project.investor}
          </p>
        )}
        <p>
          <strong>Type:</strong> {project.projectType}
        </p>
        <div className="project-description">
          <p>{project.projectInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
