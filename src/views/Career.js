import { CAREER_LIST } from "./SourceData/Career";
import { EXPERIENCE_LIST } from "./SourceData/Experience";
import ShowSource from "components/Display/ShowSource";

import { Grid } from "@mui/material";

function Career() {
  return (
    <Grid>
      <ShowSource title="경력" sourceData={CAREER_LIST} />
      <ShowSource title="경험" sourceData={EXPERIENCE_LIST} />
    </Grid>
  );
}
export default Career;
