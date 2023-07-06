import React, { useState,useContext } from 'react'
import Movie from './Movie'
import { Context1 } from './MovieContext'
const MovieList = () => {
    const [movies, setMovies] = useContext(Context1)
       
  return (
      <div>
          {movies.map(movie => (
              <Movie name={movie.name} price={movie.price} key={ movie.id} />
            
     ))}
    </div>
  )
}

export default MovieList
