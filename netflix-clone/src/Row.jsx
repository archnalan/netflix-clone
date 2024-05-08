import axios from "./axios.js";
import "./Row.css";
import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Row = ({ title, fetchUrl, isLargeRow, handleTrailerClick }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        const collection = request.data.results;
        setMovies(collection);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const base_url = "https://image.tmdb.org/t/p/original";

  const handleClick = (movie) => {
    // fetch movie trailerUrl
    movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url) => {
        //https://www.youtube.com/watch?v=XtMThy8QKqU&t=4519s get final part
        const urlParams = new URLSearchParams(new URL(url).search);
        setTimeout(() => handleTrailerClick(urlParams.get("v")), 0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
  handleTrailerClick: PropTypes.func.isRequired,
};

export default Row;
