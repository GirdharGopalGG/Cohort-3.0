import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#34495e", height: "100vh" }}>
      <ToggleMsg />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div>
            <PostComponent
              name={"gg"}
              desc={"Welcome to the ultimate arena of web development"}
              subtitle={"69 followers"}
              image={
                "https://lastfm.freetls.fastly.net/i/u/avatar170s/be8c46d31aff51fca8076011407bf92a"
              }
              time={"10m"}
            />
          </div>
          <div>
            <PostComponent
              name={"Alakh niranjan"}
              desc={"kyu nhi ho rhi padhai"}
              subtitle={"promoted"}
              image={
                "https://lastfm.freetls.fastly.net/i/u/avatar170s/be8c46d31aff51fca8076011407bf92a"
              }
              time={"30m"}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

function ToggleMsg() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button
        onClick={function () {
          setIsVisible((a) => !a);
        }}
      >
        Conditionally Rendered
      </button>

      {isVisible && <p>this is Conditionally Rendered</p>}
    </div>
  );
}

function PostComponent({ name, subtitle, time, image, desc }) {
  return (
    <div
      style={{
        margin: 20,
        padding: 10,
        backgroundColor: "#2c3e50",
        borderRadius: 10,
        color: "#bdc3c7",
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
            src={image}
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 15 }}
          />
        </div>
        <div>
          <div>
            <b>{name}</b>
          </div>
          <div>{subtitle} </div>
          {time && (
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 3 }}>{time}</div>
              <div>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/?size=100&id=16153&format=png&color=737373"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div>{desc}</div>
    </div>
  );
}
export default App;
