import React from "react";
import ReactDOM from "react-dom/client";
import "assets/css/index.css";
import Gate from "layouts/Gate";
import App from "layouts/App";
import Error from "layouts/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gate />} />
        <Route path="/main" element={<App />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
