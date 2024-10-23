import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PostComponent } from "./Post";

function App() {
  const posts = [];

  function addPost() {}

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      <div
        style={{
          height: "100vh",
          width: 300,
        }}
      >
        <div>
          <PostComponent
            desc={"mai hu khalnayak"}
            image={
              "https://lastfm.freetls.fastly.net/i/u/avatar170s/be8c46d31aff51fca8076011407bf92a"
            }
            name={"kkjk"}
            subtitle={"100 followers"}
            time={"69 min"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
