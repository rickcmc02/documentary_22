import { Grid } from "@mui/material";

function ShowTitle({ sourceData }) {
  const imgSize = "56px";

  return (
    <Grid sx={{ py: 2, px: 1, mb: 2 }}>
      <Grid sx={{ mb: 2 }}>
        <Grid sx={{ mb: 0.5 }}>
          <span className="size20 weight700">{sourceData.mainHead}</span>
        </Grid>
        <Grid>
          <span className="size18 weight300">{sourceData.subHead}</span>
        </Grid>
      </Grid>
      <Grid>
        <span style={{ lineHeight: 1.7 }}>
          {sourceData.mainDescription}
          <br />
        </span>
        <span className="weight300" style={{ lineHeight: 1.7 }}>
          {sourceData.subDescription?.map((desc) => (
            <>
              {desc}
              <br />
            </>
          ))}
        </span>
      </Grid>
    </Grid>
  );
}

export default ShowTitle;
