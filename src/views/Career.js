import { CAREER_LIST } from "./SourceData/Career";
import ShowSource from "components/Display/ShowSource";

import { Grid } from "@mui/material";

function Career() {
  return (
    <Grid>
      <ShowSource title="경력" sourceData={CAREER_LIST} />
    </Grid>
  );
}
export default Career;
