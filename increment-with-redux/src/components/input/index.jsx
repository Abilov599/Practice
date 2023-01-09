import React from "react";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  return <input type="number" />;
};

export default Input;
