import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({loading: true, error: null, data: null});
    const isMounted = useRef(true);

    //caso de uso real del use effect, se coloca para que cambie el valor de la variable y prevemnir que llame a setstate en caso de que el comopnente se haya destruido
    useEffect(() => {
            
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
                
        setState(
        {
            loading: true,
            error: null,
            data: null
        });
       
        
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                if(isMounted){
                    setState(
                        {
                            loading: false,
                            error: null,
                            data
                        }
                    )
                }                
            });
    }, [url]);

    return state;
}
