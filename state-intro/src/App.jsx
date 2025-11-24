import { useState, useEffect } from 'react'
import './App.css'
import UseEffect from './components/UseEffect'
import DataFetcher from './components/DataFetcher'
import Toggle from './components/Toggle'

function App() {
  /* useEffect(() => {
    console.log("App rendered:USEEFFECT");

    return () => {
      console.log("App cleanup: USEEFFECT");
    }
  }, [])
  
  console.log("App rendered"); */

  return (
    <>
      {/* <Navbar color={"navy " + "blue" + color} /> */}
      
      {/* <div className="card">
        <button onClick={() => setCount(count=> count + 1)}>
          count is {count}
        </button>
        <button onClick={()=> setshowbtn()}></button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <button  style={{background: "green", height: "50px", width: "100px"}} onClick={() => setCount(count + 1)}> Clicked {count} times</button> */}

      {/* <UseEffect /> */}
      {/* <DataFetcher/> */}

      <Toggle />


    </>
  )
}

export default App