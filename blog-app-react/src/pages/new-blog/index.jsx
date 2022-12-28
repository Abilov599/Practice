import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import "./index.scss";
import { blogValidationSchema } from "./schema";

const NewBlog = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        blogTitle: "",
        blogBody: "",
        blogAuthor: "",
      },
      validationSchema: blogValidationSchema,
      onSubmit: (values) => {
        let blogObj = {
          blogTitle: values.blogTitle,
          blogBody: values.blogBody,
          blogAuthor: values.blogAuthor,
        };
        axios.post("http://localhost:8000/blogs", blogObj);
        resetForm();
      },
    });

  return (
    <div id="create-blog">
      <div id="blog-form">
        <h1>Add a New Blog</h1>
        <form action="" id="form" onSubmit={handleSubmit}>
          <label htmlFor="blog-title">Blog title:</label>
          <input
            name="blogTitle"
            type="text"
            id="blog-title"
            value={values.blogTitle}
            onChange={handleChange}
          />
          {errors.blogTitle && touched.blogTitle && (
            <span style={{ color: "red", fontSize: "16px" }}>
              {errors.blogTitle}
            </span>
          )}
          <label htmlFor="blog-body">Blog body:</label>
          <textarea
            name="blogBody"
            id="blog-body"
            value={values.blogBody}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
          {errors.blogBody && touched.blogBody && (
            <span style={{ color: "red", fontSize: "16px" }}>
              {errors.blogBody}
            </span>
          )}
          <label htmlFor="blog-author">Blog author:</label>
          <select
            name="blogAuthor"
            onChange={handleChange}
            value={values.blogAuthor}
            id="blog-author"
          >
            <option value="Kanan">Kanan</option>
            <option value="Qurban">Qurban</option>
            <option value="Jeyhun">Jeyhun</option>
          </select>
          <div id="btn-box">
            <button id="submit" type="submit">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
