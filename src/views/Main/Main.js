import TechStack from "views/Career/TechStack";
import Education from "views/Career/Education";
import WorkExperience from "views/Career/WorkExperience";
import ProjectList from "views/Project/ProjectList";
import SelfIntro from "views/Self/SelfIntro";

import { Container, Grid } from "@mui/material";

const Main = () => {
  return (
    <div>
      <Container>
        <Grid>
          <TechStack />
          <Education />
          <WorkExperience />
          <ProjectList />
          <SelfIntro />
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
