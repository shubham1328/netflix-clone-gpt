import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { nowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies= () => {
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const data = await 
    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(nowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovie();
  },[]);

}

export default useNowPlayingMovies;