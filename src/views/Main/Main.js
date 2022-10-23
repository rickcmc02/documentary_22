import TechStack from "views/Career/TechStack";
import Education from "views/Career/Education";
import Experience from "views/Career/Experience";
import ProjectList from "views/Project/ProjectList";
import ShowTitle from "components/Display/ShowTitle";
import { mainText } from "views/SourceData/TitleSection";

import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Grid>
      <ShowTitle sourceData={mainText} />
      <Experience />
      <Education />
      <ProjectList />
      <TechStack />
    </Grid>
  );
};

export default Main;
