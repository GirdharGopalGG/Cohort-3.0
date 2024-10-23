import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Light />
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return <div></div>;
}

function LightSwitch() {
  function Toggle() {
    setBulbOn((a) => !a);
  }
  return (
    <div>
      <button onCanPlay={Toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
