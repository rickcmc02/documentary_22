import TechStack from "views/Career/TechStack";
import Education from "views/Career/Education";
import Experience from "views/Career/Experience";
import ProjectList from "views/Project/ProjectList";

import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Grid>
      <Experience />
      <Education />
      <ProjectList />
      <TechStack />
    </Grid>
  );
};

export default Main;
