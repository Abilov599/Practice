import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const data = useSelector((state) => state.addToCart);
  return (
    <div id="cart" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data?.map((el) => {
        return (
          <Card
            key={el.id}
            title={el.name}
            bordered={false}
            style={{ width: 300 }}
          >
            <p>{el.username}</p>
            <p>
              {el.address.street}, {el.address.city}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default Wishlist;
