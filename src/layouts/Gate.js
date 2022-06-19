import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Gate = () => {
  const navigate = useNavigate();

  return (
    <Grid
      className="backBright0 centerCenter"
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid
        className="centerCenter"
        sx={{
          border: "1px solid var(--bright3)",
          width: "50vmin",
          height: "50vmin",
          maxWidth: "500px",
          maxHeight: "500px",
          borderRadius: "25vmin",
        }}
      >
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
