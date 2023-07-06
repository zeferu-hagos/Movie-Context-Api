import React, { createContext, useState } from 'react'
import Nav from './Nav';
import MovieList from './MovieList';

export const Context1 = createContext();
const MovieContext = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "game of thronthes",
            price: 100,
            id: 1
        },
        {
            name: "z hundred",
            price: 200,
            id: 2
        },
        {
            name: "see",
            price: 300,
            id: 3
        },
        {
            name: "sniper",
            price: 400,
            id: 4
        },
    ]);
  return (
      <Context1.Provider value={[movies,setMovies]}>
          {props.children}
    </Context1.Provider>
  )
}

export default MovieContext
