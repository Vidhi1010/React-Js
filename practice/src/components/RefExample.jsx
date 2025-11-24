import React, { useState, useRef } from "react";

function RefExample() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  let btnRef = useRef();
  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button ref={btnRef} onClick={handleClick}>
        Increase count
      </button>

      <button onClick={changeColor}>Change the color of first button</button>
    </div>
  );
}

export default RefExample;
