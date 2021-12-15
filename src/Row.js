import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

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

  console.log(movies);

  // A snippet of code which runs based on a specific condition/variable

  return (
    <div>
      <h2>{title}</h2>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
