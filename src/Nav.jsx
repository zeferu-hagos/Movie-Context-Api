import React, { useContext } from 'react'
import { Context1 } from './MovieContext'
const Nav = () => {
    const [movies, setMovies] = useContext(Context1)
  return (
      <div style={{
          display: "flex", justifyContent: "space-between",
          backgroundColor: "gray", color: "white",paddingRight:"140px"
      }}>
          <h2>Zeferu hag</h2>
          <h2>List of Movies:{movies.length} </h2>
    </div>
  )
}

export default Nav
