import React,{useState} from 'react'
import './CounterApp.css'

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 20,
        counter2: 30,
        counter3: 40,
        counter4: 50
    })

    const {counter1} = state;

    return (
        <>
            <h2>{ counter1 }</h2>
            <button
                onClick={
                    () => {
                        setState({
                            ...state,
                            counter1: counter1 +1
                        })
                    }
                }
            >
                +1
            </button>
        </>
    )
}
