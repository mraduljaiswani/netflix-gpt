import React, { useRef } from "react";
import LANG from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { model, generationConfig, safetySettings } from "../utils/Gemni";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTmdb = async (movie_name) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie_name +
          "&include_adult=false&language=hindi&page=1",
        API_OPTIONS
      );
      // .then((res?r) => console.error(err));
      // .then((response) => response.results;);

      // const json = await data.json;
      // console.log(`Results for ${movie_name}:`, json);

      // return json.results;

      if (!response.ok) {
        console.error(`Failed to fetch data for ${movie_name}`);
        return [];
      }

      const json = await response.json();

      // console.log(`Full response for ${movie_name}:`, json);

      if (json && json.results) {
        // console.log(`Results for ${movie_name}:`, json.results);
        return json.results;
      } else {
        console.warn(`No results found for ${movie_name}`);
        return [];
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  };
  const hangleGptSearchClick = async () => {
    const gptQuery =
      "Act as movie reccomendation system and suggest some movies for the query " +
      searchText.current.value +
      "Only give me names for 10 movies, comma seperated like the example result give ahead. Example Result: Gadar, Sholay ,Don, Golmal, Koi mil Gaya ";

    async function run() {
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chatSession.sendMessage(gptQuery);
      if (!result.response) {
        console.error("No response from chat session.");
      }
      const gptMovies = result.response.text().split(",");
      const PromiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
      const tmdbResult = await Promise.all(PromiseArray);
      // console.log(tmdbResult);

      dispatch(
        addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResult })
      );
      // const tmdbResults = await Promise.all(
      //   gptMovies.map((movie) => searchMovieTmdb(movie))
      // );
      // console.log("gptMovies: ", gptMovies);
      // const moviesByNames = {};
      // gptMovies.forEach((name, index) => {
      //   const movieData = tmdbResults[index];
      //   if (movieData && movieData.length) {
      //     if (!moviesByNames[name]) {
      //       moviesByNames[name] = []; // Initialize array if it doesn't exist
      //     }
      //     moviesByNames[name].push(...movieData);
      //   }
      // });

      // dispatch(addGptMoviesResult(moviesByNames));
    }
    run();
  };
  return (
    <div className="md:pt-[10%] md:flex md:justify-center pt-[30%] flex justify-center ">
      <form
        className="w-[75%] bg-black rounded-lg md:w-[45%] "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-[90%] p-2 m-2 text-black md:w-[60%] border border-solid border-blue-950"
          type="text"
          placeholder={LANG[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={hangleGptSearchClick}
          className="p-2 ml-[30%] m-2 w-[25%] md:p-2 md:ml-16 md:m-2 md:w-[25%] bg-red-600 text-white rounded-lg "
        >
          {LANG[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
