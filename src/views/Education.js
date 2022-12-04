import { EDUCATION_LIST } from "./SourceData/Education";
import ShowSource from "components/Display/ShowSource";

import { Grid } from "@mui/material";

function Education() {
  return (
    <Grid>
      <ShowSource title="학력" sourceData={EDUCATION_LIST} />
    </Grid>
  );
}

export default Education;
