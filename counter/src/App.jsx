import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  //let counter = 0

  const addValue = () => {
   if (counter < 20) {
    setCounter(counter + 1)
    //setCounter((prevCounter) => prevCounter + 1)
   }
  }
 
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  
  }
  const mulValue = () => {
    if(counter > 0) {
      setCounter(counter * 2);
    }
  }
  return (
    <>
     <h1>hello</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick = {addValue}>Add value</button>
     <br />
     <br />
     <button onClick = {removeValue}>Remove value</button>
     <br />
     <br /> 
     <button onClick={mulValue}>mulValue</button>
    </>
  ) 
}

export default App  
