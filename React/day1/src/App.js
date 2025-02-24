
import { useState } from 'react';
import './App.css';
import Masha from './Masha';
// import Masha from './Masha';

function App() {
    // let count = 0;
    const [count, setCount] = useState(0)


    function decrement() {
        setCount(count - 1)
    }
    return (<>

        <p>Hi</p><h1>Guys</h1>
        <Masha />
        {count}
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={decrement}>decrement</button>
    </>
    )
}



export default App;
