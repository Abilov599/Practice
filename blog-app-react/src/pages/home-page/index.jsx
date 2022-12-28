import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogList } from "../../services/blog-list.service";
import "./index.scss";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogsList = async () => {
    setBlogs(await getBlogList());
  };

  useEffect(() => {
    getBlogsList();
  }, []);

  return (
    <div id="blogs-box">
      {blogs.map((blog) => {
        return (
          <Link to={`/blog-details/${blog.id}`} key={`${blog.id}`}>
            <div id="blog-box">
              <ul>
                <li>
                  <h2>{`${blog.blogTitle}`}</h2>
                </li>
                <li>
                  <h3>{`${blog.blogBody}`}</h3>
                </li>
                <li>
                  <p>{`${blog.blogAuthor}`}</p>
                </li>
              </ul>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
