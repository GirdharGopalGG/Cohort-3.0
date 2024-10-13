import { useEffect, useState } from "react";

function App() {
  //{{CONDITIONAL RENDERING}}
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible((counterVisible) => !counterVisible);
    }, 3000);
  }, []);

  // THIS CODE IS NEVER UNMOUNTING THE COUNTER COMPONENT IT ONLY CHANGE ITS {{VISIBILITY}}
  return (
    <div style={{ visibility: counterVisible ? "visible" : "hidden" }}>
      <Counter />
    </div>
  );

  // return <div>{counterVisible && <Counter />}</div>;

  //THIS {{CONDITIONAL RENDERING}} UNMOUNTS THE COUNTER COMPONENT

  T;
}

function Counter() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount((count) => count + 1);
    // setCount((count) => count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  useEffect(function () {
    console.log("Upon Mounting - inside useEffect()");

    const onUNMOUNTING = setInterval(() => {
      setCount((count) => count + 1);
      console.log("inside setInterval");
    }, 1000);

    return function () {
      clearInterval(onUNMOUNTING); //upon UNmounting THIS RUNS/// THE {{CONDITIONAL RENDER}} IS RESPONSIBLE FOR {{UNMOUNTING}} THE {{Counter}} COMPONENT
    };
  }, []);

  console.log("Counter Component");

  return (
    <>
      <h2>{count}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>
        <img
          src="https://img.icons8.com/?size=100&id=123372&format=png&color=737373"
          width="15"
        />
      </button>
    </>
  );
}

export default App;
