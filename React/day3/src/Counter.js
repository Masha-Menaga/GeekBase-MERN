import React, { useContext } from 'react'
import CounterContext from './CounterContext'
// import Button from './Button'

const Counter = ({ children }) => {

    const { count } = useContext(CounterContext)

    return (
        <div>Counter
            {/* Count : {val.data} */}

            {/* <button onClick={add}>Increment</button>
            <button onClick={sub}>Decrement</button> */}
            {/* <h3>Count: {data}</h3>
            <button onClick={add}>Increment</button>
            <button onClick={sub}>decrement</button> */}
            <h3>Count : {count}</h3>
            {/* {children} */}
            {/* <Button text="increment" func={add} />
            <Button text="Decrement" func={sub} /> */}
        </div>
    )
}

export default Counter