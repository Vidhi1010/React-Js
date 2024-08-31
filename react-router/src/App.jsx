import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Help/Faq";
import Contact from "./pages/Help/Contact";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<RootLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element= {<HelpLayout />}>
        <Route path="faq" element ={<Faq />}/>
        <Route path="contact"element = {<Contact/>}/>
      </Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BrowserRouter>
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
    </BrowserRouter> */}

    <RouterProvider router={router}/>
    </>
  );
}

export default App;
