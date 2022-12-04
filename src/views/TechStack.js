import { Grid } from "@mui/material";

import { TECHSTACK_LIST } from "views/SourceData/TechStack";
import ShowSource from "components/Display/ShowSource";

function TechStack() {
  return (
    <Grid>
      <ShowSource title="기술" sourceData={TECHSTACK_LIST} />
    </Grid>
  );
}

export default TechStack;
