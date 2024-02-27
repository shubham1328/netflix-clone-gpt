import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="bglogo"
        />
      </div>
      <GptSearchBar/>
      <div className='pt-36'>
      <marquee className='text-7xl text-white bg-black' direction="left" behavior="scroll" scrollamount="5">
        OpenAi API is paid so implemeted logic only Not able to show live Demo(Soon show the working demo)
      </marquee>
      </div>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;