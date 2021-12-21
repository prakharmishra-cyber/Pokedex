import React from 'react'
import {useParams} from 'react-router-dom';

const Pokemon = () => {

    const params = useParams();

    return (
        <div>
            This is a single pokemon and the passed param is {params.id}
        </div>
    )
}

export default Pokemon