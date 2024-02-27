import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from '../utils/openai';
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.appconfig.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB =  async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS)

    const json = await data.json();

    return data.results;
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value)
    // Make an API call to GPT API & Get Movie Results
    const gptQuery = "Act as a Movie Recomendation system Suggest some movies for the query :" + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Dhol, Sholay, Don, Dhoom, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices){
      console.error(gptResults.choices);
    }

    console.log("🚀 ~ handleGptSearchClick ~ gptResults:", gptResults.choices)
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");
    console.log("🚀 ~ handleGptSearchClick ~ gptMovies:", gptMovies)

    //For each movie I will Search TMDN API
    const promiseArray = gptMovies.map(movie =>searchMovieTMDB(movie));
    //[promise, promise, promise, promise, promise]
    const tmdbResults = await Promise.all();
    console.log("🚀 ~ handleGptSearchClick ~ tmdbResults:", tmdbResults)

    dispatch(addGptMovieResult({movieNames: gptMovies , movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
        onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
