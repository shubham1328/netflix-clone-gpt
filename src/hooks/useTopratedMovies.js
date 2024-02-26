import React, { useEffect } from 'react';
import { addTopratedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'

const useTopratedMovies = () => {
    const dispatch = useDispatch();

    const getTopratedMovies = async () => {
      const data = await 
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopratedMovies(json.results));
    }
  
    useEffect(() => {
      getTopratedMovies();
    },[]);
}

export default useTopratedMovies