import React from "react";
import { useDispatch } from "react-redux";
import { decrementByOne } from "../../redux/action/counter.action";

const Decrement = () => {
  const dispactch = useDispatch();
  return <button onClick={() => dispactch(decrementByOne())}>Decrement</button>;
};

export default Decrement;
