import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Gate = () => {
  const navigate = useNavigate();

  return (
    <Grid
      className="backBright0"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          border: "1px solid var(--bright2)",
          width: "50vmin",
          height: "50vmin",
          borderRadius: "25vmin",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          className="backColor1 textBright9"
          sx={{
            width: "70%",
            height: "70%",
            borderRadius: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/main")}
        >
          <div>썸네일</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Gate;
