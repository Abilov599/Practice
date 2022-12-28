import axios from "axios";

const BASE_URL = "http://localhost:8000/blogs";

export const getBlogList = async () => {
  let response = await axios(BASE_URL);
  return response.data;
};

export const getOneBlogList = async (id) => {
  let response = await axios(`${BASE_URL}/${id}`);
  return response.data;
};

export const deleteOneBlogList = async (id) => {
  let response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};