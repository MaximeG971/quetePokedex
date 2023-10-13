const NavBar = ({indexPokemon, setIndexPokemon, pokemonList}) => {
    const handleClick = ((indexPokemon, pokemonName) => {
        setIndexPokemon(indexPokemon);
        if (pokemonName === "Pikachu") {
            alert("Pika Pikachu !!!")
        }
    })
      return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button
                key={index}
                onClick={() => handleClick(index, pokemon.name)}
                >
                    {pokemon.name}
                </button>
            ))}
        </div>
      )
};


export default NavBar;
