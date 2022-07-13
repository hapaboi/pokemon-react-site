import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const apiurl = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios.get(apiurl)
      .then(response => {
        setPokemon(response.data)
      })
  }, [apiurl])
  
  if(pokemon){
    return (
      <div className="App">
        {pokemon.height}
      </div>
    );
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
