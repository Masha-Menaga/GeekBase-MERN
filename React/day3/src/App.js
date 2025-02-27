
import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  const [list, setList] = useState(["apple", "banana", "orange"])
  const [fruits, setFruits] = useState([{ id: 1, name: "grapes" }, { id: 2, name: "Mango" }])
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  return (
    <div>
      <ul>
        {list.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
      <ul>
        {fruits.map((item) => (<li key={item.id}>{item.name}</li>))}
      </ul>
      <Counter data={count} add={increment} sub={decrement} />

      {/* <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button> */}


    </div>


  );
}

export default App;
