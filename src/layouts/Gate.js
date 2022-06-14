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
          border: "1px solid var(--bright2)",
          width: "50vmin",
          height: "50vmin",
          maxWidth: "500px",
          maxHeight: "500px",
          borderRadius: "25vmin",
        }}
      >
        <Grid
          className="centerCenter backColor1 cursorPointer"
          sx={{
            width: "70%",
            height: "70%",
            borderRadius: "70%",
          }}
          onClick={() => navigate("/main")}
        >
          <p className="textBright9">썸네일</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Gate;
