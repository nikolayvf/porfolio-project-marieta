import React from "react";
import BlogArticle from "./BlogArticle";

const articles = [
  {
    title: "First Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Second Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Third Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Fourth Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Fifth Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Sixth Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Seventh Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: "https://via.placeholder.com/300",
  },
];

const Blog = () => {
  return (
    <div>
      {articles.map((article, index) => (
        <BlogArticle
          key={index}
          title={article.title}
          content={article.content}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
};

export default Blog;
