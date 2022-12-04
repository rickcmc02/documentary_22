import { expSource } from "./SourceData/Experience";
import ShowSource from "components/Display/ShowSource";

import { Grid } from "@mui/material";

function Experience() {
  return (
    <Grid>
      <ShowSource title="경력" sourceData={expSource} />
    </Grid>
  );
}
export default Experience;