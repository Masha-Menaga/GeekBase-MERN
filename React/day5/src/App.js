
import './App.css';
import Counter from './Counter';
import CounterContext from './CounterContext';
import { useRef, useState } from 'react';

function App() {
  const fileRef = useRef(); // Creating a Reference
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  function handleFile() {
    fileRef.current.click();//pre-functions
  }

  return (
    <>
      <CounterContext.Provider value={{ count, increment, decrement }}>
        <Counter />
      </CounterContext.Provider>
      <input type='file' ref={fileRef} />
      <button onClick={handleFile}>Upload</button>
    </>
  );
}

export default App;
