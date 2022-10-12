import { eduSource } from "../SourceData/Education";

import { Grid } from "@mui/material";
import ShowSource from "components/Display/ShowSource";

function Education() {
  return (
    <Grid>
      <ShowSource sourceData={eduSource} />
    </Grid>
  );
}

export default Education;
