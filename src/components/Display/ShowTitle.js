import { Grid } from "@mui/material";

function ShowTitle({ sourceData }) {
  return (
    <Grid sx={{ py: 2, px: 1, mb: 2 }}>
      <Grid sx={{ mb: 2 }}>
        <Grid sx={{ mb: 0.5 }}>
          <span className="size20 weight700 colorBright7">
            {sourceData.mainHead}
          </span>
        </Grid>
        <Grid>
          <span className="size18 weight300 colorBright7">
            {sourceData.subHead}
          </span>
        </Grid>
      </Grid>
      <Grid>
        <span className="colorBright7" style={{ lineHeight: 1.7 }}>
          {sourceData.mainDescription}
          <br />
        </span>
        <span
          className="weight300 size15 colorBright7"
          style={{ lineHeight: 1.7 }}
        >
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
