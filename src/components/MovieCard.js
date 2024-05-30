import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_URL + poster_path} alt="" />
    </div>
  );
};

export default MovieCard;
