import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { addTopMovies } from "../utils/moviesSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();
  const TopMovies = useSelector((store) => store.movies.TopMovies);
  const getTopMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=Hindi&page=1&region=India",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("getTopMovies" + json);
    dispatch(addTopMovies(json.results));
  };

  useEffect(() => {
    !TopMovies && getTopMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useTopMovies;
