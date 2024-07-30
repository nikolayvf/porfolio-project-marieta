// src/components/Blog.jsx

import React from "react";
import BlogArticle from "./BlogArticle";
import articlesData from "../resources/articles.json";
import "./Blog.styles.css";

const Blog = () => {
  return (
    <div className="blog-container">
      {articlesData.articles.map((article) => (
        <BlogArticle
          key={article.id}
          title={article.title}
          content={article.content}
          imageUrls={article.imageUrls}
        />
      ))}
    </div>
  );
};

export default Blog;
