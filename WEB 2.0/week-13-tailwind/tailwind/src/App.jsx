import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src="https://www.vecteezy.com/free-vector/web-logo" alt="" />{" "}
        Webinar.gg
      </div>
    </>
  );
}

export default App;
