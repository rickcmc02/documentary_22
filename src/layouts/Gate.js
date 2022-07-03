import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Gate = () => {
  const navigate = useNavigate();

  return (
    <Grid
      className="backBright1 centerCenter"
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid className="centerCenter borderBright3 thumbOrbit">
        <Grid className="centerCenter thumbNailBack">
          <Grid
            className="centerCenter backColor4 cursorPointer thumbNailCover"
            onClick={() => navigate("/main")}
          >
            Retriever Young
            <Grid sx={{ mt: 1, mx: -3.25 }}>
              <br />
              <p style={{ fontWeight: "normal", fontSize: "15px" }}>
                portfolio
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Gate;
