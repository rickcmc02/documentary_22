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
      <Grid className="centerCenter borderBright4 thumbOrbit">
        <Grid className="centerCenter thumbNailBack">
          <Grid
            className="centerCenter backColor2 cursorPointer thumbNailCover"
            onClick={() => navigate("/main")}
          >
            <h3 className="textBright7">retriever Young</h3>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Gate;
