import React, { useContext } from 'react'
import CounterContext from './CounterContext'
import Button from './Button'

const Counter = () => {
    const { count } = useContext(CounterContext);

    return (
        <div>

            Count : {count}
            <Button />
        </div>

    )
}

export default Counter