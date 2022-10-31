import { Grid } from "@mui/material";

function ShowSource({ title, sourceData }) {
  const imgSize = "56px";

  return (
    <Grid sx={{ px: 1, py: 3, borderTop: "1px solid var(--bright3)" }}>
      <Grid sx={{ mb: 1 }}>
        <span className="size18 weight700 colorBright6">{title}</span>
      </Grid>
      {sourceData.map((data, idx) => (
        <Grid container key={`sourcedata_${title}_${idx}`} alignItems="center">
          {data.imgSrc && (
            <Grid
              className="flex itemsCenter contentCenter"
              sx={{
                borderRadius: "16px",
                width: imgSize,
                height: imgSize,
                backgroundColor: "var(--gray0)",
              }}
            >
              <img
                src={data.imgSrc}
                style={{ width: "40px", borderRadius: "10px" }}
              />
            </Grid>
          )}
          <Grid sx={{ width: `calc(100% - ${imgSize})`, p: 1.5 }}>
            {data.content && (
              <Grid sx={{ mb: 1 }}>
                <span className="colorBright7 size18">{data.content}</span>
              </Grid>
            )}
            <Grid container>
              {data.detail && (
                <Grid item xs={12} md={11} sx={{ mb: 0.5 }}>
                  <span className="colorBright6 size16 weight300">
                    {data.detail}
                  </span>
                </Grid>
              )}
              {data.period && (
                <Grid item xs={12} md={1}>
                  <span className="colorBright5 size15">{data.period}</span>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowSource;
