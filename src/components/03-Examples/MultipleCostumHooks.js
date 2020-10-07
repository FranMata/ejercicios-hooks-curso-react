import React from 'react'
import { useFetch } from '../../hooks/useFetch';

import './Style.css';

export const MultipleCostumHooks = () => {

    console.log(useFetch('https://www.breakingbadapi.com/api/quotes/1'));

    return (
        <div>
            <h1>Custom hook !!!</h1>
        </div>
    )
}
