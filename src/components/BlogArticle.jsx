import React from "react";
import "./BlogArticle.styles.css";

const BlogArticle = ({ title, content, imageUrl }) => {
  return (
    <div className="article-container">
      <img src={imageUrl} alt={title} className="article-image" />
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-text">{content}</p>
      </div>
    </div>
  );
};

export default BlogArticle;
