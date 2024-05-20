import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../projects.json";
import "./ProjectDetail.styles.css";

// Load all images from the resources folder dynamically
const requireContext = require.context(
  "../resources",
  true,
  /\.(jpg|jpeg|png)$/
);
const images = {};
requireContext.keys().forEach((key) => {
  images[key.replace("./", "/")] = requireContext(key).default;
});

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.projects.find(
    (p) => p.id === parseInt(projectId, 10)
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <div className="project-images">
        {project.projectImages.map((image, index) => (
          <img
            key={index}
            src={images[image]}
            alt={`View ${index + 1} of ${project.name}`}
          />
        ))}
      </div>
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
  );
}

export default ProjectDetail;
