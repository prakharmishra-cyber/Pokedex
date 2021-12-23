import React, { useState } from 'react';
import './Pokemons.css';
import { useGetAllPokemonQuery } from '../../redux/services/pokemon';
import { Link } from 'react-router-dom';

const Pokemons = () => {

    const [curr_page, setCurr_page] = useState(0);
    const { data, error, isLoading } = useGetAllPokemonQuery(curr_page);

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div>
                    <div className='page_controls'>
                        {data.previous !== null ? <button onClick={() => setCurr_page(curr_page - 20)}> &#x3c; Previous Page</button> : null}
                        {data.next !== null ? <button onClick={() => setCurr_page(curr_page + 20)}>Next Page &#x3e;</button> : null}
                    </div>
                    <div className='outer_div'>
                        {
                            data.results.map((element, index) => {
                                return (
                                    <div key={index} className='inner_div'>
                                        <div className='breaker'>
                                            <div className='pokemon_title'>POKEMON NAME</div>
                                            <div className='pokemon_title_answer'>{element.name}</div>
                                        </div>
                                        <Link to={`pokemon/${element.name}`} className='details_link'>
                                            Click to know details
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Pokemons
