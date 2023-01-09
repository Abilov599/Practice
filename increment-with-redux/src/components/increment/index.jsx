import React from "react";
import { useDispatch } from "react-redux";
import { incrementByOne } from "../../redux/action/counter.action";
const Increment = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(incrementByOne())}>Increment</button>;
};

export default Increment;
