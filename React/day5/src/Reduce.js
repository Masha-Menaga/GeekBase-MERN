import React, { useReducer } from 'react'

//define the reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count: 0 }
        default:
            return state;

    }

}

const Reduce = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 }) //Use reducer function

    return (
        <div><h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button></div>
    )
}

export default Reduce