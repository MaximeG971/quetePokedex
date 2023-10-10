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

export default PokemonCard