import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { usePostTitle } from "./useFetch";

function App() {
  const post = usePostTitle();
  return <div>{post}</div>;
}

export default App;
