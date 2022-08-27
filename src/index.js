import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "redux/store";

import "assets/css/index.css";
import Gate from "layouts/Gate";
import App from "layouts/App";
import Error from "layouts/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Gate />} />
          <Route path="/*" element={<App />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
