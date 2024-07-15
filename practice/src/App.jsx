import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Vidhi")
  const [email, setEmail] = useState("")

  const a = useRef(10)
  const handelClick =() => {
    //alert("Hi !!!")
    /* let a = 10;
    a = a+1;
    console.log(a); */

    a.current = a.current + 1;
    console.log(a.current)
    setCount(a.current + 1)


  }

  const handelClick1 = (e)=> {
    setName(e.target.value)
  }
  
  const handelClick2 = (e)=> {
    setEmail(e.target.value)
  }
  return (
    <>
    <div className="button">
      <button onClick={handelClick}>{count}</button>
    </div>
    <input type="text" value={name} onChange={handelClick1} />
    <input type="text" value={email} onChange={handelClick2} />
    </>
  )
}

export default App
