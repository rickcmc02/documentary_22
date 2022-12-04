import TechStack from "views/TechStack";
import Education from "views/Education";
import Experience from "views/Experience";
import ProjectList from "views/ProjectList";

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
