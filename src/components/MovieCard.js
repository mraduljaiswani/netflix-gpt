import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMAGE_URL + poster_path} alt="N/A" />
    </div>
  );
};

export default MovieCard;
