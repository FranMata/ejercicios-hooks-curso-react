import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './Style.css';

export const MultipleCostumHooks = () => {

    const {counter, increment, decrement} = useCounter(1);

    const {loading, error, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);    
    const {quote, author} = !!data && data[0];
    // esta loogica la entendi asi. Si es null literalmente devuelve null, ahora si lo negamos pregintamos "es cierto que esto no es null?"


    return (
        <div>
            <h1>BrakingBad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                    (<div className="alert alert-info text-center">
                        loading...
                    </div>)
                :                    
                    (<blockquote className="blockquote text-right">
                        <p className="mb-0"> {quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>)                
            }

            <button
            className="btn btn-primary"
            onClick={decrement} >
                Frase anterior
            </button>

            <br/>

            <button
            className="btn btn-primary"
            onClick= {increment}>
                Siguiente frase
            </button>

        </div>
    )
}
