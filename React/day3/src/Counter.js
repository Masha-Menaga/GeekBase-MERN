import React from 'react'

const Counter = ({ data, add, sub }) => {


    return (
        <div>Counter
            <h3>Count: {data}</h3>
            <button onClick={add}>Increment</button>
            <button onClick={sub}>decrement</button>
        </div>
    )
}

export default Counter