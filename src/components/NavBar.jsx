const NavBar = ({indexPokemon, setIndexPokemon, pokemonList}) => {
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
          <button onClick={previousClick}>Précédent</button>
          <button onClick={nextClick}>Suivant</button>
          </div>
      )
};

export default NavBar;