import Banner from "./Banner.jsx";
import Row from "./Row.jsx";
import requests from "./requests.js";
import "./App.css";
import Nav from "./Nav.jsx";

function App() {
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
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
      </div>
    </>
  );
}

export default App;
