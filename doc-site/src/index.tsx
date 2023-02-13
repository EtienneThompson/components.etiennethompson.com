import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { LandingPage } from "./pages/LandingPage";
import { ButtonPage } from "./pages/components/Button";
import { DropdownPage } from "./pages/components/Dropdown";
import { LoadingSpinnerPage } from "./pages/components/LoadingSpinner/LoadingSpinnerPage";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<LandingPage />} />
        <Route path="components/">
          <Route path="button" element={<ButtonPage />} />
          <Route path="dropdown" element={<DropdownPage />} />
          <Route path="loading-spinner" element={<LoadingSpinnerPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
