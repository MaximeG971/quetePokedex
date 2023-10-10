import PropTypes from "prop-types";

const PokemonCard = (props) => {
    const { name, imgSrc } = props.pokemon;
    return (
        <div>
        <figure>
            {imgSrc ? (
                <img src= {imgSrc}></img>
            ) : (
                <p>???</p>
            )
            }
            <figcaption>{name}</figcaption>
</figure>
</div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired
}

export default PokemonCard