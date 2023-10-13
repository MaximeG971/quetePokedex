import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar"
import { useEffect } from "react";


const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
];

const App = () => {
  const [indexPokemon, setIndexPokemon] = useState(0);
  const pokemonArray = pokemonList[indexPokemon]
  useEffect (
    () => {
      alert("Hello Pokemon trainer :)");
    },
    []
    );

  return (
    <div>
      <PokemonCard pokemon={pokemonArray}/>
      <NavBar indexPokemon={indexPokemon} setIndexPokemon={setIndexPokemon} pokemonList={pokemonList}/>
      </div>
  )
}

export default App
