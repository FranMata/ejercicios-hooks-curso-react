import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {state, reset, increment, decrement} = useCounter(2);

    return (
        <>
            <h1>El valor del custom hook es: {state}</h1>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}
