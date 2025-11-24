import { useState } from "react";
import "./App.css";
//import Contact from "./components/Contact";
//import Jocks from "./components/Jocks";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });

  return (
    <>

      {entryElements}
      {/* <Entry
        img={{
          src: "./images/vidhi1.jpg",
          alt: "Mount Fuji",
        }}
        title="Mount Fuji"
        country="Japan"
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). It is an active stratovolcano that last erupted in 1707-1708. Mount Fuji is a popular destination for tourists and climbers, and it is considered one of Japan's three sacred mountains."
      /> */}
      {/* <Contact 
        img="./images/vidhi1.jpg" 
        name="Miss. Vidhi" 
        phone="(91) 9798725001" 
        email="mr.whiskaz@catnap.meow" 
      /> */}

      {/* <div>
        <Jocks 
        setup="Why did the scarecrow win an award?" 
        punchline="Because he was outstanding in his field!" 
      />
      <Jocks 
        setup="Why don't scientists trust atoms?" 
        punchline="Because they make up everything!" 
      />
      <Jocks 
        setup="Why did the bicycle fall over?" 
        punchline="Because it was two-tired!" 
      />
      <Jocks 
        setup="What do you call fake spaghetti?" 
        punchline="An impasta!" 
      />
      <Jocks 
        setup="Why did the math book look sad?" 
        punchline="Because it had too many problems." 
      />
      </div> */}
    </>
  );
}

export default App;
