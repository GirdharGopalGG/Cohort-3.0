import { useState, memo, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);

  return (
    <>
      <CurrentCount count={count} />
      <IncreseCount />
      <DecreaseCount />
    </>
  );
}

const CurrentCount = memo(function ({ count }) {
  return (
    <>
      count: {count}
      <br />
    </>
  );
});

const IncreseCount = memo(function () {
  function inc() {}
  return (
    <>
      <button onClick={inc}>inc</button>
    </>
  );
});

const DecreaseCount = memo(function () {
  function dec() {}
  return (
    <>
      <button onClick={dec}>dec</button>
    </>
  );
});

export default App;
