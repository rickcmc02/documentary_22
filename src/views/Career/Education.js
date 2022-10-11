import { eduSource } from "../SourceData/Education";

import { Grid } from "@mui/material";

function Education() {
  return (
    <Grid>
      {eduSource.map((edu) => (
        <Grid container alignItems="center">
          {edu.imgSrc && <img src={edu.imgSrc} style={{ width: "40px" }} />}
          <Grid>{edu.content}</Grid>
          <Grid>{edu.detail}</Grid>
          <Grid>{edu.period}</Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Education;
