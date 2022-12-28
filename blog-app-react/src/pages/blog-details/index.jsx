import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteOneBlogList,
  getOneBlogList,
} from "../../services/blog-list.service";
import "./index.scss";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlogDetail] = useState({});
  const navigate = useNavigate();

  const GetBlogDetail = async () => {
    setBlogDetail(await getOneBlogList(id));
  };

  useEffect(() => {
    GetBlogDetail();
  }, []);

  const [delblog, setDelete] = useState({});

  const delBlog = async () => {
    setDelete(deleteOneBlogList(id));
  };

  const handleRemove = () => {
    delBlog();
    navigate("/");
  };

  return (
    <div id="container">
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
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default BlogDetails;
