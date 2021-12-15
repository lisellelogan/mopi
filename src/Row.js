import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when row loads, and dont run again
  }, []);

  // A snippet of code which runs based on a specific condition/variable

  return (
    <div>
      <h2>{title}</h2>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
