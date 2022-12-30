import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

import "./App.css";
import { getUsers } from "./service/github-users.service";
const App = () => {
  const [arr, setUsers] = useState([]);
  const [countryName, setCountryName] = useState([]);

  // const getMyusers = async () => {
  //   setUsers(await getUsers(countryName));
  // };

  useEffect(() => {
    axios(`http://universities.hipolabs.com/search?name=${countryName}`).then(
      (data) => {
        // console.log(data.data);

        setUsers(data.data);
      }
    );
  }, [countryName]);

  // const handleChange = (e) => {
  //   setCountryName(e.target.value);
  //   console.log(users);
  // };

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      // render: (country) => country,
    },
    {
      title: "University",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Domains",
      dataIndex: "domains",
      render: (element) => element[0],
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Web Pages",
      dataIndex: "web_pages",
      key: "",
      render: (element) => element[0],
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
  ];

  // const onChange = (pagination, filters, sorter, extra) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };

  return (
    <main>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setCountryName(e.target.value);
        }}
      />
      {/* <button onClick={handleClick}>Click me</button> */}
      <Table columns={columns} dataSource={arr}  />
    </main>
  );
};

export default App;
