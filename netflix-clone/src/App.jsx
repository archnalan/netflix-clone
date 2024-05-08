import Banner from "./Banner.jsx";
import Row from "./Row.jsx";
import requests from "./requests.js";
import "./App.css";
import Nav from "./Nav.jsx";
import { useState } from "react";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [activeRow, setActiveRow] = useState(null);

  const clearTrailer = () => {
    setActiveRow(null);
    setTrailerUrl("");
  };
  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <div className="movie_rows">
          <div></div>
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
          <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
          <Row
            title="Top Rated Movies"
            fetchUrl={requests.fetchTopRated}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
          <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
          <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
          <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
          <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
          <Row
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
            trailerUrl={trailerUrl}
            setTrailerUrl={setTrailerUrl}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            clearTrailer={clearTrailer}
          />
        </div>
      </div>
    </>
  );
}

export default App;
