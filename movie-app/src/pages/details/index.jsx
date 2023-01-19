import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const getMovieById = async () => {
    let res = await axios(`http://www.omdbapi.com/?apiKey=954502f8&i=${id}`);
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieById();
  }, []);

  console.log(movie);
  return (
    <main id="movie-details">
      <div>
        
      </div>
    </main>
  );
};

export default Details;
