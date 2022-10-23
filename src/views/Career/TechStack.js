import { Grid } from "@mui/material";

import { techSource } from "views/SourceData/TechStack";
import ShowSource from "components/Display/ShowSource";

function TechStack() {
  return (
    <Grid>
      <ShowSource title="기술" sourceData={techSource} />
    </Grid>
  );
}

export default TechStack;
