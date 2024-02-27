import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={BG_URL}
          alt="bglogo"
        />
      </div>

    <div className="">
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    <div className='pt-36'>
      <marquee className='text-3xl md:text-7xl text-white bg-black' direction="left" behavior="scroll" scrollamount="5">
        OpenAi API is paid so Implemeted logic only Not able to show live Demo(Will find some solution)
      </marquee>
      </div>
    </>
  )
}

export default GptSearchPage;