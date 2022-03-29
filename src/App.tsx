import { useEffect, useState } from "react";
import { MoviesComp } from "./Components/Movies/Movies";
import { Pagination } from "./Components/Pagination/Pagination";
import { Application } from "./AppStyles";
import { SearchComponent } from "./Components/Search/SearchComponent";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

const data = require("./moviedata.json");

export default function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterMode, setFilterMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(60);

  /*use effect only gets run at first mount*/
  useEffect(() => {
    /*Function to fetch the movies*/
    const fetchMovies = async () => {
      setLoading(true);
      // const res = await fetch("http://localhost:3000/movies");
      // const jsondata = await res.json();
      setMovies(data["movies"]);
      setFiltered(data["movies"]);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  const paginate = (number: any) => {
    setCurrentPage(number);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexofFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexofFirstMovie, indexOfLastMovie);

  return (
    <Application>
      <SplashScreen />
      <SearchComponent
        setFiltered={setFiltered}
        movies={movies}
        setFilterMode={setFilterMode}
      />
      <MoviesComp
        loading={loading}
        movies={!filterMode ? currentMovies : filtered}
      />

      {!filterMode ? (
        <Pagination
          currentPage={currentPage}
          moviesPerPage={moviesPerPage}
          paginate={paginate}
          totalMovies={movies.length}
        />
      ) : null}
    </Application>
  );
}
