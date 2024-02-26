import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = (props) => {
    const {posterPath} = props;
  return (
    <div className='w-48 pr-4'>
        <img alt='Moviecard' src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard