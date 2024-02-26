import React from "react";
import { useSelector } from "react-redux";
import VideoTIitle from "./VideoTIitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[6];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <div className="">
        <VideoTIitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
      <SecondaryContainer/>
    </div>
  );
};

export default MainContainer;
