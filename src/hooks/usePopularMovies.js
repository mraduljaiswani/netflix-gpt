import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=Hindi&page=1&region=India",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("getPopularMovies" + json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default usePopularMovies;
