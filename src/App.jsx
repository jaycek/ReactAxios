import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [joke,setJoke] =useState("")
  const getJoke = ()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
  .then(function (response) {
    // handle success
    console.log(response);
    setJoke(`${response.data.setup} .... ${response.data.punchline} `)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  }
  return (
    <div >
      <h2>Get a random joke</h2>
      <button onClick={getJoke}>Press</button>
      <label className='block' htmlFor="">{joke}</label>
    </div>
  )
}

export default App
