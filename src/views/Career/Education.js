import { eduSource } from "../SourceData/Education";
import ShowSource from "components/Display/ShowSource";

import { Grid } from "@mui/material";

function Education() {
  return (
    <Grid>
      <ShowSource sourceData={eduSource} />
    </Grid>
  );
}

export default Education;
