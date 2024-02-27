import React, { useContext } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch  = useSelector((store) => store.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearchPage />) : (<MainContainer />)}
    </div>
  );
};

export default Browse;

{/*
       * MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n
       */}
