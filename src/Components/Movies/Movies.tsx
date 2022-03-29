import React from "react";
import { MoviesContainer } from "../Movies/MoviesStyles";
import { MovieCard } from "../MovieCard/MovieCard";

export const MoviesComp = ({ movies, loading }: any) => {
  console.log();
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <MoviesContainer className="movies_section">
      {Object.keys(movies).length ? (
        movies.map((movie: any, i: any) => <MovieCard key={i} movie={movie} />)
      ) : (
        <div>No Movies here found!</div>
      )}
    </MoviesContainer>
  );
};
