import React from 'react';
import './Pokemons.css';
import { useGetAllPokemonQuery } from '../../redux/services/pokemon';
import {Link} from 'react-router-dom';

const Pokemons = () => {

    const { data, error, isLoading } = useGetAllPokemonQuery();

    return (
        <div>
            {error ? (
            <>Oh no, there was an error</>
            ) : isLoading ? (
            <>Loading...</>
            ) : data ? (
            <div className='outer_div'>
                {
                    data.results.map((element, index)=> {
                        return (
                            
                            <div key={index} className='inner_div'>
                                <div className='pokemon_title'>POKEMON NAME</div>
                                <div className='pokemon_title_answer'>{element.name}</div>
                                <Link to={`pokemon/${element.name}`} className='details_link'>
                                   Click to know details
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            ) : null}
        </div>
    )
}

export default Pokemons
