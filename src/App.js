import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const apiurl = 'https://pokeapi.co/api/v2/pokemon/ditto';
  const [pokemon, setPokemon] = useState(null);
  const [usertext, setUsertext] = useState('');

  const getInputValue = (e)=>{
    e.preventDefault();
    console.log("user1:"+usertext)
    axios.get("https://pokeapi.co/api/v2/pokemon/"+usertext)
      .then(response => {
        setPokemon(response.data);
    })
  };

  const textUpdate = (e)=>{
    const userValue = e.target.value;
    setUsertext(userValue);
  }

  useEffect(() => {
    axios.get(apiurl)
      .then(response => {
        setPokemon(response.data);
      })
      console.log("hello")
  }, [apiurl])
  
  if(pokemon){
    return (
      <div className="App">
        <form onSubmit={getInputValue}>
          Search: <input type="text" value={usertext} onChange={textUpdate}/>
          <button
            type="submit"
            children="Submit"
          />
        </form>
        <p>Name: {pokemon.name}</p>
        <p>Height: {pokemon.height} decimeters</p>
        <p>Weight: {pokemon.weight} hectograms</p>
      </div>
    );
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;

