import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Container, Grid } from "@mui/material";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ShowTitle from "components/Display/ShowTitle";
import { MAIN_TITLE } from "views/SourceData/Title";
import Main from "views/Main";
import Education from "views/Education";
import TechStack from "views/TechStack";
import Career from "views/Career";
import ProjectList from "views/Project";

function App() {
  const headerHeight = 7;
  const footerHeight = 15;
  const containerMaxWidth = 1400;

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
      <Header
        height={headerHeight}
        containerMaxWidth={containerMaxWidth}
        isMobile={isMobile}
        isTablet={isTablet}
      />
      <Grid
        sx={{
          minHeight: `calc(100vh - ${footerHeight * 8}px)`,
          pt: headerHeight,
        }}
      >
        <Container
          maxWidth="false"
          sx={{ maxWidth: `${containerMaxWidth}px`, py: 2 }}
        >
          <ShowTitle sourceData={MAIN_TITLE} />
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/stack" element={<TechStack />} />
            <Route path="/education" element={<Education />} />
            <Route path="/career" element={<Career />} />
            <Route path="/project" element={<ProjectList />} />
          </Routes>
        </Container>
      </Grid>
      <Footer height={footerHeight} containerMaxWidth={containerMaxWidth} />
    </Grid>
  );
}

export default App;
