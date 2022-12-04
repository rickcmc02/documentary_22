import { Grid } from "@mui/material";

import { PROJECT_LIST } from "views/SourceData/Project";
import ShowSource from "components/Display/ShowSource";

function Project() {
  return (
    <Grid>
      <ShowSource title="프로젝트" sourceData={PROJECT_LIST} />
    </Grid>
  );
}

export default Project;
