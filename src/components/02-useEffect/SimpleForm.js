import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() =>{
        console.log('hey!')
    }, []);    

    const handleEvent = ({target}) =>{
        setFormState({
                ...formState,
                [target.name]: target.value
            })
    }
    
    return (
        <>
            <h1>Utilizando useEffect</h1>
            <hr/>

            <div>
                <h2>Digite su nombre</h2>
                <input
                    type="text"
                    name= "name"
                    value={name}
                    onChange={handleEvent}
                />                
            </div>

            <div>
                <h2>Digite su e-mail</h2>
                <input
                    type="text"
                    name= "email"
                    value={email}
                    onChange={handleEvent}
                />
            </div>

            {name === "123" && <Message/>}
        </>
    )
}
