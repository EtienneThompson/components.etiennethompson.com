import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Toolbar } from "./components/Toolbar/Toolbar";

function App() {
  // document.documentElement.className = "theme-light";

  return (
    <div className="App">
      <Toolbar />
      <div style={{ marginTop: "50px" }}></div>
      <div style={{ margin: "0 10px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
