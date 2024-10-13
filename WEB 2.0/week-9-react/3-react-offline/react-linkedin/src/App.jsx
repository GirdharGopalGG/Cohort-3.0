import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#e84393", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div>
            <PostComponent />
          </div>
          <div>
            <PostComponent />
          </div>
          <div>
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

function PostComponent(name, followerCount, time, image, desc) {
  return (
    <div
      style={{
        margin: 20,
        padding: 10,
        backgroundColor: "#fd79a8",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 10,
        }}
      >
        <div>
          <img
            src="https://lastfm.freetls.fastly.net/i/u/avatar170s/be8c46d31aff51fca8076011407bf92a"
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 15 }}
          />
        </div>
        <div>
          <div>
            <b>alas</b>
          </div>
          <div>96 followers</div>
          <div>69</div>
        </div>
      </div>

      <div>Welcome to the ultimate arena of web development</div>
    </div>
  );
}
export default App;
