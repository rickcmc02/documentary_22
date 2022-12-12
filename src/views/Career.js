import { useEffect, useState } from "react";

import { CAREER_LIST } from "./SourceData/Career";
import { EXPERIENCE_LIST } from "./SourceData/Experience";
import ShowSource from "components/Display/ShowSource";

import { Grid } from "@mui/material";

function Career() {
  const [isCareerPage, setIsCareerPage] = useState(false);
  useEffect(() => {
    if (window.location?.pathname && window.location.pathname === "/career")
      setIsCareerPage(true);
    else setIsCareerPage(false);
  }, [window.location?.pathname]);

  return (
    <Grid>
      <ShowSource title="경력" sourceData={CAREER_LIST} />
      {isCareerPage && <ShowSource title="경험" sourceData={EXPERIENCE_LIST} />}
    </Grid>
  );
}
export default Career;
