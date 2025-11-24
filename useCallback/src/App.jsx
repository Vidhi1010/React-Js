import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  /* const getAdjective = () => {
    return "another";
  } */

  /* const getAdjective = () => {
    return "another" + count;
  }; */

  /* const getAdjective = useCallback(() => {
    return "another" + count;
  }, []); */

   const getAdjective = useCallback(() => {
    return "another" + count;
  }, [count]);

  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
    </>
  );
}

export default App;
