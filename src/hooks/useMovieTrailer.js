import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux"

const useMovieTrailer = (movieId) =>{
  const dispatch = useDispatch();

  // fetch trailer video && update the store with trailer 
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
    
        const filerData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filerData.length ? filerData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getMovieVideos();
      }, []);
}

export default useMovieTrailer;