import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <Counter count={count} />
      <button onClick={increaseCount}>Inc</button>
    </div>
  );
}

function Counter(props) {
  useEffect(function () {
    console.log("on mount");

    return function () {
      console.log("on unmount");
    };
  }, []);

  useEffect(
    function () {
      console.log("on mount with prop");

      return function () {
        console.log("on unmount with prop");
      };
    },
    [props.count]
  );

  return <div>Counter {props.count}</div>;
}
