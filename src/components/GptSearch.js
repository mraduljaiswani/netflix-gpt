import React from "react";
import SearchBar from "./SearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BackgroundImage } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div>
        <img
        className="md:fixed md:-z-20 md:w-screen fixed -z-20 h-screen object-cover"
          src={BackgroundImage}
          alt=""
        />
      </div>

      <div className="pt-[15%] md:p-5">
        <SearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
