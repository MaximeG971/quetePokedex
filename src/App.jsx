import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  const [indexPokemon, setIndexPokemon] = useState(0);
  const pokemonArray = pokemonList[indexPokemon]
  const nextClick = () => {
    if (indexPokemon < pokemonList.length -1) {
      setIndexPokemon(indexPokemon +1)
    }
  }
  const previousClick = () => {
    if (indexPokemon > 0) {
      setIndexPokemon(indexPokemon -1)
    }
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonArray}/>
      <button onClick={previousClick}>Précédent</button>
      <button onClick={nextClick}>Suivant</button>
      </div>
  )
}

export default App