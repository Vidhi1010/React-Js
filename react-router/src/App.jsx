import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import "./App.css";

import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0); 

  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Router</h1>
        <NavLink to = "/home">Home</NavLink>
        <NavLink to = "/about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
