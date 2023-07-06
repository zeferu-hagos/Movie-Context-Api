import React, { useContext, useState } from 'react'
import { Context1 } from './MovieContext';
const AddMovie = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("");
    const [movies,setMovies] = useContext(Context1)

    const updateName = (e) => {
        setName(e.target.value)  
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)  
    }

    const Submit = e => {
        e.preventDefault();
        setMovies(previous => [...previous, {name:name, price:price}])

    }
    return (
      
    <div>
          <form onSubmit={Submit}>
              <input type='text' name='name' value={name} onChange={updateName}></input>
              <input type='text' name='price' value={price} onChange={updatePrice}></input>
              <button>submit</button>
      </form>
    </div>
  )
}

export default AddMovie
