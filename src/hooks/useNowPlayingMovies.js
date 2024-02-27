import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const newPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(nowPlayingMovies(json.results));
  };

  useEffect(() => {
    !newPlayingMovies && getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
