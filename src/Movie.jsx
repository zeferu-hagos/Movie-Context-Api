import React from 'react'

const Movie = ({name,price}) => {
  return (
    <div>
          <h1 style={{ textAlign: "center" }}>{name}</h1>
          <p style={{ textAlign: "center" }}>{ price}</p>
    </div>
  )
}

export default Movie
