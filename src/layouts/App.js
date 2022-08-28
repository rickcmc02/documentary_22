import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Grid } from "@mui/material";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Main from "views/Main/Main";
import Education from "views/Career/Education";
import TechStack from "views/Career/TechStack";
import WorkExperience from "views/Career/WorkExperience";
import ProjectList from "views/Project/ProjectList";
import SelfIntro from "views/Self/SelfIntro";

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
          <Route path="/stack" element={<TechStack />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/self" element={<SelfIntro />} />
        </Routes>
      </Grid>
      <Footer height={footerHeight} />
    </Grid>
  );
}

export default App;
