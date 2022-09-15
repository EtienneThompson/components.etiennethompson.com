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
      <Outlet />
    </div>
  );
}

export default App;
