import axios from "axios";

const BASE_URL = "https://northwind.vercel.app/api/products";

export const getProducts = async () => {
  const res = await axios(BASE_URL);
  return res.data;
};
