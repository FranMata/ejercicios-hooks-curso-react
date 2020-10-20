import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import "../style.css";


export const MemoHook = () => {

    const {counter, increment}= useCounter(1);
    const [show, setShow] = useState(false);    

    const procesoPesao = (iteraciones) => {
        for(let i = 0; i < iteraciones; i++){
            console.log("dandola");
        }

        return `${iteraciones} se han hecho`;
    }

    // hook de usememo, lo que hace es disparar la funcion indicada cuando los parametros cambian
    const MemoProcesoPesao = useMemo(() => procesoPesao(counter), [counter]);

    return (
        
        <div>
            <h1>Contador {counter} </h1>

            <p> {MemoProcesoPesao} </p>
            

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
