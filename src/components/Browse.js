import React, { useContext } from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      {/*
       * MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n
       */}
    </div>
  )
}

export default Browse