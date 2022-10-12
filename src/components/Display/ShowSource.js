import { Grid } from "@mui/material";

function ShowSource({ sourceData }) {
  return (
    <Grid>
      {sourceData.map((data) => (
        <Grid container alignItems="center">
          {data.imgSrc && <img src={data.imgSrc} style={{ width: "40px" }} />}
          {data.content && <Grid>{data.content}</Grid>}
          {data.detail && <Grid>{data.detail}</Grid>}
          {data.period && <Grid>{data.period}</Grid>}
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowSource;
