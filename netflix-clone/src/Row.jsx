import axios from "./axios.js";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Row = ({
  title,
  fetchUrl,
  isLargeRow,
  trailerUrl,
  setTrailerUrl,
  activeRow,
  setActiveRow,
  clearTrailer,
}) => {
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

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    //Toggle active Row
    activeRow === title ? clearTrailer() : setActiveRow(title);

    // fetch a new trailerUrl
    movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url) => {
        //https://www.youtube.com/watch?v=XtMThy8QKqU&t=4519s get final part
        const urlParams = new URLSearchParams(new URL(url).search);
        setTimeout(() => setTrailerUrl(urlParams.get("v")), 0);
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
      <div className="trailer">
        {activeRow === title && trailerUrl && (
          <Youtube videoId={trailerUrl} opts={opts} />
        )}
      </div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
  trailerUrl: PropTypes.string,
  setTrailerUrl: PropTypes.func.isRequired,
  activeRow: PropTypes.string,
  setActiveRow: PropTypes.func.isRequired,
  clearTrailer: PropTypes.func,
};

export default Row;
