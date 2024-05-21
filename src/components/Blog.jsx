import React from "react";
import BlogArticle from "./BlogArticle";
import image1 from "../resources/interior/1/CGI01.jpg";
import image2 from "../resources/interior/1/CGI02.jpg";
import image3 from "../resources/interior/1/CGI03.jpg";
import image4 from "../resources/exterior/1/24011_TECTONIS_ParamontGardens_CAM-02_rev02.jpg";
import image5 from "../resources/exterior/1/24011_TECTONIS_ParamontGardens_CAM-04_rev03.jpg";
import image6 from "../resources/exterior/1/24011_TECTONIS_ParamontGardens_CAM-05_rev02.jpg";
import image7 from "../resources/exterior/1/24011_TECTONIS_ParamontGardens_CAM-08_rev02.jpg";

const articles = [
  {
    title: "First Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: image1,
  },
  {
    title: "Second Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: image2,
  },
  {
    title: "Third Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: image3,
  },
  {
    title: "Fourth Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: image4,
  },
  {
    title: "Fifth Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: image5,
  },
  {
    title: "Sixth Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: image6,
  },
  {
    title: "Seventh Article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut consequat erat. Cras vitae nibh et nunc fermentum suscipit. Duis scelerisque auctor libero, ut malesuada orci feugiat at. Quisque dictum sapien sit amet arcu tempus, ac fermentum magna pharetra. Morbi sodales libero vitae libero ullamcorper, eget malesuada metus tempus.",
    imageUrl: image7,
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
