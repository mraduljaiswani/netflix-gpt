import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieResults) return;

  if (movieResults.length === 0) {
    return (
      <div className="bg-black text-white ">
        Sorry, I could'nt suggest anything that matches your search. <br />
        Please try again !!
      </div>
    );
  }
  // return <div className=" bg-black text-white p-2 m-2 ">{movieNames}</div>;
  return (
    <div className=" bg-black text-white ">
      <div className="">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
