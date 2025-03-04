import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const Button = ({ children }) => {
    const { increment, decrement } = useContext(CounterContext)
    return (
        <div>
            {/* <button onClick={func}>{text}</button> */}

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button></button>
        </div >
    )
}

export default Button