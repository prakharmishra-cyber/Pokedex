import React from 'react';
import { useGetPokemonByNameQuery } from '../../redux/services/pokemon';

const PokemonImage = ({ pokemon_name }) => {

    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon_name);

    return (
        <div>
            {error ? (
                <>Oh, no there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div>
                    <img src={data.sprites.front_default} alt="pokemon_image" />
                </div>
            ) : null}
        </div>
    )
}

export default PokemonImage
