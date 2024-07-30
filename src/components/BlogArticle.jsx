import React from "react";
import "./BlogArticle.styles.css";

// Function to dynamically import images from ARTICLE_IMAGES folder
const importArticleImages = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// Import all images from ARTICLE_IMAGES
const images = importArticleImages(
  require.context("../resources/ARTICLE_IMAGES", false, /\.(jpg|jpeg|png)$/)
);

// Placeholder image in case of error

const BlogArticle = ({ title, content, imageUrls, altTexts }) => {
  return (
    <div className="blog-article-container">
      <h2>{title}</h2>
      {imageUrls && imageUrls.length > 0 && (
        <div className="article-images">
          {imageUrls.map((url, index) => {
            const imageName = url.split("/").pop(); // Extract the filename
            const imageSrc = images[imageName];
            const altText =
              altTexts && altTexts[index]
                ? altTexts[index]
                : `Изображение за статия "${title}"`;

            return (
              <img
                key={index}
                src={imageSrc}
                alt={altText}
                className="article-image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop if placeholder fails
                }}
              />
            );
          })}
        </div>
      )}
      <div className="article-content">
        {content.split("\n").map((line, index) => {
          // Skip empty lines to avoid rendering empty <p> tags
          if (line.trim() === "") return null;
          return <p key={index}>{line}</p>;
        })}
      </div>
    </div>
  );
};

export default BlogArticle;
