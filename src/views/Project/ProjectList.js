import { Grid } from "@mui/material";

import { projectSource } from "views/SourceData/ProjectList";
import ShowSource from "components/Display/ShowSource";

function ProjectList() {
  return (
    <Grid>
      <ShowSource title="프로젝트" sourceData={projectSource} />
    </Grid>
  );
}

export default ProjectList;
