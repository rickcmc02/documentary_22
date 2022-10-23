import TechStack from "views/Career/TechStack";
import Education from "views/Career/Education";
import Experience from "views/Career/Experience";
import ProjectList from "views/Project/ProjectList";

import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Grid>
      <TechStack />
      <Education />
      <Experience />
      <ProjectList />
    </Grid>
  );
};

export default Main;
