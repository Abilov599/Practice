import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    let res = await axios("https://www.omdbapi.com/?apiKey=954502f8&s=harry");
    setData(res.data.Search);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <main id="home">
      <section id="movies">
        <h4>Movies</h4>
        <div id="movies-list">
          <div
            className="movies-row"
            style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
          >
            {data?.map((el, i) => {
              return (
                <Link to={`${el.imdbID}`} className="card" key={i}>
                 <div> <Card
                    style={{
                      width: 240,
                      backgroundColor: "#242424",
                      border: "none",
                    }}
                    cover={<img alt="example" src={`${el.Poster}`} />}
                  >
                    <h3 style={{ color: "white", fontSize: "18px" }}>
                      {el.Title}
                    </h3>
                    <br />
                    <p style={{ color: "white" }}>{el.Year}</p>
                  </Card></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section id="shows">
        <h4>Shows</h4>
        <div id="shows-list"></div>
      </section>
    </main>
  );
};

export default Home;
