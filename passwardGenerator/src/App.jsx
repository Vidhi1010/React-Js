import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passward, setPassward] = useState("");

  // useRef hook
  const passwardRef = useRef(null);
  const copyButtonRef = useRef(null);

  const passwardGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 
    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassward(pass);
  }, [length, numberAllowed, charAllowed, setPassward]);

  const copyPasswardToClipboard = useCallback(() => {
    passwardRef.current?.select();
    window.navigator.clipboard.writeText(passward);
  }, [passward]);

  useEffect(() => {
    passwardGenerator();
  }, [length, numberAllowed, charAllowed, passwardGenerator]);

  const handleMouseOver = () => {
    if (copyButtonRef.current) {
      copyButtonRef.current.style.backgroundColor = "darkblue";
    }
  };

  const handleMouseOut = () => {
    if (copyButtonRef.current) {
      copyButtonRef.current.style.backgroundColor = "blue";
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white my-3">
          Passward Generator
        </h1>
        <div className='className = " flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={passward}
            className="outline-none w-full py-1 px-3"
            placeholder="passward"
            readOnly
            ref={passwardRef}
          />
          <button
            onClick={copyPasswardToClipboard}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            ref={copyButtonRef}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/* 
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLenth] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passward, setPassward] = useState("");

  //useRef hook
  const passwardRef = useRef(null)

  const passwardGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassward(pass);
  }, [length, numberAllowed, charAllowed, setPassward]);

  const copyPasswardToClipboard =  useCallback(() => {
    passwardRef.current?.select();
   // passwardRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(passward);
  }, [passward])

  useEffect(() => {
    passwardGenerator()
  }, [length, numberAllowed, charAllowed, passwardGenerator])

  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white my-3">
          Passward Generator
        </h1>
        <div className='className = " flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={passward}
            className="outline-none w-full py-1 px-3"
            placeholder="passward"
            readOnly
            ref={passwardRef}
          />
          <button onClick = {copyPasswardToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLenth(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
*/
