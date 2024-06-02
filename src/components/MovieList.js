import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  // console.log(title);
  // console.log(movies);
  // const hasMovies = movies && movies.length > 0;
  console.log(movies);
  return (
    <div className="">
      <h1 className="text-2xl md:font-bold md:text-4xl p-4 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll px-3">
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
              />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
