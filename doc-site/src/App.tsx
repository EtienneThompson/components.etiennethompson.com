import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  document.documentElement.className = "theme-light";

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
