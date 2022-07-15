import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const apiurl = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const [pokemon, setPokemon] = useState(null)
  const [usertext, setUsertext] = useState('');

  const getInputValue = (e)=>{
    const userValue = e.target.value;
    console.log({userValue})
    setUsertext(userValue)
  };
  
  useEffect(() => {
    axios.get(apiurl)
      .then(response => {
        setPokemon(response.data)
      })
  }, [apiurl])
  
  if(pokemon){
    return (
      <div className="App">
        <label>
          Search: <input type="text" onChange={getInputValue} value={usertext}/>
        </label>
        <p>{pokemon.name}</p>
        <p>{usertext}</p>
      </div>
    );
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;

