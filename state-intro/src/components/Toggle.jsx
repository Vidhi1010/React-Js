import { useState } from "react";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  let handleChange = () => {
    setIsDark(!dark);
  };
  

  return (
    <div >
      <button onClick={handleChange} className="">
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Toggle;
