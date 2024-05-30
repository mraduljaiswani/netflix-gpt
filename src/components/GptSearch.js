import React from "react";
import SearchBar from "./SearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BackgroundImage } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div>
        <img className="absolute -z-20" src={BackgroundImage} alt="" />
      </div>
      <SearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GptSearch;
