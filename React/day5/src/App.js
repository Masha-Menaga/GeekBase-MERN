
import './App.css';
import Counter from './Counter';
import CounterContext from './CounterContext';
import { useRef, useState } from 'react';
import Modal from './Modal';
import Timer from './Timer';

function App() {
  const fileRef = useRef(); // Creating a Reference
  const inputRef = useRef();
  const modelRef = useRef();

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
  function handleFocus() {
    inputRef.current.focus(); // pre-defined functions
  }
  function handleShow() {
    modelRef.current.showModal();
  }
  function handleClose() {
    modelRef.current.close();
  }
  return (
    <>
      <CounterContext.Provider value={{ count, increment, decrement }}>
        <Counter />
      </CounterContext.Provider>


      <input type='file' ref={fileRef} style={{ display: 'none' }} />
      <button onClick={handleFile}>Upload</button>

      <input ref={inputRef} type='text' placeholder='Type here...' />
      <button onClick={handleFocus}>Focus Input</button>

      <button onClick={handleShow}>Show Dialog</button>
      <dialog ref={modelRef} className='dialog1'>
        <p>Hi This is a Dialoge Box</p>
        <button onClick={handleClose} className='close-button'>&#10006;</button>
        <button onClick={handleClose}>close</button>
      </dialog>
      <Modal func={handleShow} ref={modelRef} />

      <Timer />
    </>
  );
}

export default App;
