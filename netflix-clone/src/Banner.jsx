import axios from "./axios.js";
import { useEffect, useState } from "react";
import requests from "./requests.js";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function FetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const movies = request.data.results;
        const randomIndex = Math.floor(Math.random() * (movies.length - 1));
        const randomMovie = movies[randomIndex];

        setMovie(randomMovie);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
      }
    }
    FetchData();
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original";

  function trancate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("${base_url}${movie?.backdrop_path}")`
          : "none",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
        </div>
        {/* Description */}
        <p className="banner_description">{trancate(movie?.overview, 150)}</p>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  );
}

export default Banner;
