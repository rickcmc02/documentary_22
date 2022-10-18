import { Grid } from "@mui/material";

function ShowSource({ sourceData }) {
  return (
    <Grid>
      {sourceData.map((data) => (
        <Grid container alignItems="center">
          {data.imgSrc && (
            <Grid
              className="flex itemsCenter contentCenter"
              sx={{
                borderRadius: "16px",
                width: "50px",
                height: "50px",
                backgroundColor: "var(--gray0)",
              }}
            >
              <img
                src={data.imgSrc}
                style={{ width: "40px", borderRadius: "10px" }}
              />
            </Grid>
          )}
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
