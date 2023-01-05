import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "antd";
import { getProducts } from "../../services/products.service";
import { ModeContext } from "../../context/contextAPI";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { productsData, setProductsData } = useContext(ModeContext);
  const columns = [
    {
      title: "Product Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      key: "unitPrice",
      sorter: (a, b) => a.unitPrice - b.unitPrice,
    },
    {
      title: "Quantity Per Unit",
      dataIndex: "quantityPerUnit",
      key: "quantityPerUnit",
      sorter: (a, b) => (a.quantityPerUnit > b.quantityPerUnit ? 1 : -1),
    },
    {
      title: "Details",
      dataIndex: "id",
      render: (id) => <Link to={`/product/${id}`}>Product Details</Link>,
    },
    {
      title: "Add to Cart",
      render: () => <button>Add to Cart</button>,
    },
  ];

  const getAllProducts = async () => {
    setProductsData(await getProducts());
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return <Table columns={columns} dataSource={productsData} />;
};
export default ProductsList;
