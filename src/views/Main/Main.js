import TechStack from "views/Career/TechStack";
import Education from "views/Career/Education";
import Experience from "views/Career/Experience";
import ProjectList from "views/Project/ProjectList";
import SelfIntro from "views/Self/SelfIntro";

import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Grid>
      <TechStack />
      <Education />
      <Experience />
      <ProjectList />
      <SelfIntro />
    </Grid>
  );
};

export default Main;
