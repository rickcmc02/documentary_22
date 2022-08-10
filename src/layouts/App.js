import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Grid } from "@mui/material";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Main from "views/Main/Main";

function App() {
  const headerHeight = 7;
  const footerHeight = 15;

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    let winInnerWidth = window.innerWidth;
    if (winInnerWidth < 1024) {
      if (winInnerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsTablet(true);
      }
    }
  }, [window.innerWidth]);

  return (
    <Grid className="backBright1" sx={{ minHeight: "100vh" }}>
      <Header height={headerHeight} isMobile={isMobile} isTablet={isTablet} />
      <Grid
        sx={{
          minHeight: `calc(100vh - ${footerHeight * 8}px)`,
          pt: headerHeight,
        }}
      >
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </Grid>
      <Footer height={footerHeight} />
    </Grid>
  );
}

export default App;
