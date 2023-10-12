const NavBar = ({setIndexPokemon, pokemonList}) => {
      return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button
                key={index}
                onClick={() => setIndexPokemon(index)}
                >
                    {pokemon.name}
                </button>
            ))}
        </div>
      )
};

export default NavBar;
