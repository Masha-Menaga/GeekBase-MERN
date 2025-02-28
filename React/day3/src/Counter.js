import React from 'react'
import Button from './Button'

const Counter = ({ data, add, sub }) => {


    return (
        <div>Counter
            {/* Count : {val.data} */}
            <h3>Count : {data}</h3>
            {/* <button onClick={add}>Increment</button>
            <button onClick={sub}>Decrement</button> */}
            {/* <h3>Count: {data}</h3>
            <button onClick={add}>Increment</button>
            <button onClick={sub}>decrement</button> */}

            <Button text="increment" func={add} />
            <Button text="Decrement" func={sub} />
        </div>
    )
}

export default Counter