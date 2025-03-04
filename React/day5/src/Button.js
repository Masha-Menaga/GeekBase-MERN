import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const Button = () => {
    const { count, increment, decrement } = useContext(CounterContext)
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={count < 1 ? true : false}>Decrement</button>
        </div>
    )
}

export default Button