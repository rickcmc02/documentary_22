import TechStack from "views/TechStack";
import Education from "views/Education";
import Experience from "views/Career";
import ProjectList from "views/Project";

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
