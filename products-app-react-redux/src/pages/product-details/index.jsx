import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataById } from "../../redux/slice/getDataById";

const ProductDetails = () => {
  const { id } = useParams();
  const myDetailsData = useSelector((state) => state.getProductDataById.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataById(id));
  }, [dispatch]);

  const deleteProduct = () => {
    axios.delete(`http://localhost:3000/products/${id}`);
    window.history.back();
  };

  return (
    <div>
      <h1>Details</h1>
      <div className="detailsCard">
        <div className="detailsImg">
          <img src={myDetailsData?.imgUrl} alt="" />
        </div>
        <div className="title">
          <h2>{myDetailsData?.name}</h2>
          <h3>{myDetailsData?.price}$</h3>
          <p>{myDetailsData?.description}</p>
          <button onClick={() => deleteProduct()}>Delete</button>
          <button onClick={() => window.history.back()}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
