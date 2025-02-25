
import { useState } from 'react';
import './App.css';
import Masha from './Masha';
import Form from './Form';
// import Masha from './Masha';

function App() {
    // let count = 0;
    // [state,stateUpdatingfunction]=useState(initialization)
    const [count, setCount] = useState(100)
    const [a, setA] = useState("")
    const [masha, setMasha] = useState(false)


    function decrement() {
        setCount(count - 1)
        setMasha(true)
        setA("Ragul")
    }

    return (<>

        <p>Hi</p><h1>Guys</h1>
        <Masha />
        {a}<br />
        {masha}
        count: {count}<br />
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={decrement}>decrement</button>

        <Form />    </>
    )
}



export default App;
