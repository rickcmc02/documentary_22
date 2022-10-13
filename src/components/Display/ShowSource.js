import { Grid } from "@mui/material";

function ShowSource({ sourceData }) {
  return (
    <Grid>
      {sourceData.map((data) => (
        <Grid container alignItems="center">
          {data.imgSrc && <img src={data.imgSrc} style={{ width: "40px" }} />}
          {data.content && (
            <Grid>
              <span className="colorBright8">{data.content}</span>
            </Grid>
          )}
          {data.detail && (
            <Grid>
              <span className="colorBright6">{data.detail}</span>
            </Grid>
          )}
          {data.period && (
            <Grid>
              <span className="colorBright5">{data.period}</span>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowSource;
