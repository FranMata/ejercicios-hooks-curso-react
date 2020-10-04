import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [state, setState] = useState({x: 0,y: 0});
    const {x,y} = state;

    useEffect(() => {
            const mousemove = (e) =>{
                // const coords = {x: e.x, y: e.y}
                setState({
                    x: e.x,
                    y: e.y
                })
            }

            window.addEventListener('mousemove', mousemove);
        
            //el return destruye lo que esta ej el useEffwct, esto evita comportami8entos no deseados
        return () => {
            window.removeEventListener('mousemove', mousemove);
        }
    }, [])

    return (
        <div>
            <h3>eres genial!</h3>
            <p>
              x: {x} 
              y: {y}  
            </p>           
        </div>
    )
}
