import axios from "axios";

const BASE_URL = "http://universities.hipolabs.com/search?name=";
// ${username}

export const getUsers = async (countryName) => {
  const res = await axios(`${BASE_URL}${countryName}`);
  return res.data;
};
