import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/404-not-found-phishing.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div id="img-box" style={{ width: "100wh" }}>
      <img style={{ width: "100%" }} src={img} />
      <button id= "goToHome"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
