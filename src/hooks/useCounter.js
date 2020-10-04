import React from 'react'
import { useState } from 'react'

export const useCounter = (initialState) => {
    
    const [state, setstate] = useState(initialState);

    const reset = () => setstate(initialState);

    const increment = () => setstate(state + 1);

    const decrement = () => setstate(state - 1);

    return{
        state,
        reset,
        increment,
        decrement
    };
}
