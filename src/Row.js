import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

const base_url = "https://image.tmdb.org/t/p/orginial/"

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  // A snippet of code which runs based on a specific condition/variable

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* several row posters */}
        {movies.map(movie => {
          <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        })}
      </div>

    </div>
  );
}

export default Row;
