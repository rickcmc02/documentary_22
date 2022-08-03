import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, createStoreHook } from "react-redux";
import { applyMiddleware, compose } from "redux";

import "assets/css/index.css";
import Gate from "layouts/Gate";
import App from "layouts/App";
import Error from "layouts/Error";

const store = createStoreHook(rootReducer, compose(applyMiddleware()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Gate />} />
          <Route path="/main" element={<App />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
