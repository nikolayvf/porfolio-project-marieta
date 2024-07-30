// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import projectsData from "../resources/projects.json";
// import "./Projects.styles.css";

// // Function to dynamically import images
// const importImages = (r) => {
//   let images = {};
//   r.keys().forEach((item) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// };

// // Import all images from the resources folder
// const images = importImages(
//   require.context("../resources", true, /\.(jpg|jpeg|png)$/)
// );

// function Projects({ filter }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine the current filter based on props or URL
//   const currentFilter =
//     filter ||
//     (() => {
//       if (location.pathname.includes("/projects/interior")) return "Interior";
//       if (location.pathname.includes("/projects/exterior")) return "Exterior";
//       return null; // No filter
//     })();

//   // Filter projects based on the current filter
//   const filteredProjects = currentFilter
//     ? projectsData.projects.filter(
//         (project) =>
//           project.projectType.toLowerCase() === currentFilter.toLowerCase()
//       )
//     : projectsData.projects;

//   // Function to handle clicking on a project card
//   const handleProjectClick = (projectId) => {
//     navigate(`/project/${projectId}`);
//   };

//   return (
//     <div className="projects-container">
//       {filteredProjects.map((project) => {
//         const imageKey = project.projectImages[0];
//         const imageSrc = images[imageKey];

//         return (
//           <div
//             key={project.id}
//             className="project-card"
//             onClick={() => handleProjectClick(project.id)}
//             style={{ cursor: "pointer" }}
//           >
//             <div className="project-image">
//               <img src={imageSrc} alt={project.name} />
//               <div className="overlay">
//                 <div className="overlay-text">
//                   <h2>{project.name}</h2>
//                   <p>{project.location}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       {filteredProjects.length === 0 && (
//         <p className="no-projects">Няма намерени проекти за избрания тип.</p>
//       )}
//     </div>
//   );
// }

// export default Projects;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import projectsData from "../resources/projects.json";
import "./Projects.styles.css";

// Function to dynamically import images
const importImages = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// Import all images from the resources folder
const images = importImages(
  require.context("../resources", true, /\.(jpg|jpeg|png)$/)
);

function Projects({ filter }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the current filter based on props or URL
  const currentFilter =
    filter ||
    (() => {
      if (location.pathname.includes("/projects/interior")) return "Interior";
      if (location.pathname.includes("/projects/exterior")) return "Exterior";
      return null; // No filter
    })();

  // Filter projects based on the current filter
  const filteredProjects = currentFilter
    ? projectsData.projects.filter(
        (project) =>
          project.projectType.toLowerCase() === currentFilter.toLowerCase()
      )
    : projectsData.projects;

  // Function to handle clicking on a project card
  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="projects-container">
      {filteredProjects.map((project) => {
        const thumbnailKey = project.projectThumbnail;
        const thumbnailSrc = images[thumbnailKey];

        return (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="project-image">
              <img src={thumbnailSrc} alt={project.name} loading="lazy" />
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
      {filteredProjects.length === 0 && (
        <p className="no-projects">Няма намерени проекти за избрания тип.</p>
      )}
    </div>
  );
}

export default Projects;
