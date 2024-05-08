import Banner from "./Banner.jsx";
import Row from "./Row.jsx";
import requests from "./requests.js";
import "./App.css";
import Nav from "./Nav.jsx";
import { useState } from "react";
import PopUp from "./PopUp.jsx";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [popUpVisible, setPopUpVisible] = useState(false);

  const handleTrailerClick = (url) => {
    setTrailerUrl(url);
    setPopUpVisible(true);
  };

  const handleClose = () => {
    setPopUpVisible(false);
    setTimeout(setTrailerUrl(""), 0);
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
            handleTrailerClick={handleTrailerClick}
          />
          <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            handleTrailerClick={handleTrailerClick}
          />
          <Row
            title="Top Rated Movies"
            fetchUrl={requests.fetchTopRated}
            handleTrailerClick={handleTrailerClick}
          />
          <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            handleTrailerClick={handleTrailerClick}
          />
          <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            handleTrailerClick={handleTrailerClick}
          />
          <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            handleTrailerClick={handleTrailerClick}
          />
          <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            handleTrailerClick={handleTrailerClick}
          />
          <Row
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
            handleTrailerClick={handleTrailerClick}
          />
          {popUpVisible && (
            <PopUp trailerUrl={trailerUrl} handleClose={handleClose} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
