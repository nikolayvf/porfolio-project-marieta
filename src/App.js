// // App.js or wherever your main component is structured
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Services from "./components/Services";
// import About from "./components/About";
// import Contacts from "./components/Contacts";
// import Blog from "./components/Blog";
// import ProjectDetail from "./components/ProjectDetail";

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/project/:projectId" element={<ProjectDetail />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/blog" element={<Blog />} />
//       </Routes>
//       <Footer /> {/* Place Footer component at the bottom */}
//     </Router>
//   );
// }

// export default App;

// src/App.jsx

// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* New Routes for Interior and Exterior Projects */}
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/interior"
          element={<Projects filter="Interior" />}
        />
        <Route
          path="/projects/exterior"
          element={<Projects filter="Exterior" />}
        />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer /> {/* Place Footer component at the bottom */}
    </Router>
  );
}

export default App;
