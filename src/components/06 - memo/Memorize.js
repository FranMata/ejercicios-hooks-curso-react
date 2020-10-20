import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import "../style.css";


export const Memorize = () => {

    const {counter, increment}= useCounter(1);
    const [show, setShow] = useState(false);    

    return (
        
        <div>
            <h1>Contador </h1> <Small value={counter}/>

            <button
                className="btn btn-primary mt-4"
                onClick={increment}
            >
                incrementar
            </button> 

            <button
                className="btn btn primary mt-4"
                onClick={()=>{
                    setShow(!show);
                }}
            >
                Mostrar {JSON.stringify(show)}    
            </button>  
        </div>
    )
}
