import { useState, useEffect, useCallback, useRef } from "react";

const Practice = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passward, setPassward] = useState("");

  const passwardGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) {
      str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    if (numberAllowed) {
      str += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassward(pass);
  }, [length, numberAllowed, charAllowed, setPassward]);

  useEffect(() => {
    passwardGenerator();
  }, [length, numberAllowed, charAllowed, passwardGenerator]);

  const copyPassward = useCallback(() => {
    navigator.clipboard.writeText(passward);
  }, [passward]);

  return (
    <div>
      <h1>Passwars Generator</h1>
      <div>
        <input type="text" value={passward} readOnly />
        <button onClick={copyPassward}>Copy Passward</button>
      </div>
      <div>
        <label>Length</label>
        <input type="range" value={length} min={8} max={100} onChange={(e) => setLength(e.target.value)}/>
      </div>
      <div>
        <label>Numbers</label>
        <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}/>
      </div>

      <div>
        <label>Characters</label>
        <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
          setCharAllowed((prev) => !prev);
        }} />
      </div>
    </div>
  );
};

export default Practice;
