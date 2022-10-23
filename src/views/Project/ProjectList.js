import { Grid } from "@mui/material";

import { projectSource } from "views/SourceData/ProjectList";
import ShowSource from "components/Display/ShowSource";

function ProjectList() {
  return (
    <Grid>
      <ShowSource sourceData={projectSource} />
    </Grid>
  );
}

export default ProjectList;
