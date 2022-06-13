import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Grid } from "@mui/material";

import "assets/css/App.css";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Main from "views/Main/Main";

function App() {
  const headerHeight = 7;
  const footerHeight = 20;

  return (
    <Grid className="App" sx={{ minHeight: "100vh" }}>
      <Header height={headerHeight} />
      <Grid
        sx={{
          minHeight: `calc(100vh - ${footerHeight * 8}px)`,
          pt: headerHeight,
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Grid>
      <Footer height={footerHeight} />
    </Grid>
  );
}

export default App;
