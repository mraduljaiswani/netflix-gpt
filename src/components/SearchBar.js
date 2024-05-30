import React from "react";
import LANG from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black  rounded-lg w-[45%]">
        <input
          className="p-2 m-2 text-black w-[60%] border border-solid border-blue-950"
          type="text"
          placeholder={LANG[langKey].gptSearchPlaceholder}
        />
        <button className="p-2 ml-16 m-2 w-[25%] bg-red-600 text-white rounded-lg">
          {LANG[langKey].search}
        </button>
      </form> 
    </div>
  );
};

export default SearchBar;
