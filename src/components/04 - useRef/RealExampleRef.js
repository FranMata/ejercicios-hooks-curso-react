import React, { useState } from 'react'
import {MultipleCostumHooks} from '../03-Examples/MultipleCostumHooks'

import "../03-Examples/Style.css";
export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);    
    
    return (

        <div>
            <h1>Ejemplo de un uso real del hook useRef</h1>
            <hr></hr>

            { show && <MultipleCostumHooks/>}

            <button
                className="btn btn-primary"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Mostrar/Ocultar
            </button>
        </div>
    )
}
