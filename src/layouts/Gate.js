import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Gate = () => {
  const navigate = useNavigate();

  return (
    <Grid>
      <div onClick={() => navigate("/main")}>썸네일</div>
    </Grid>
  );
};

export default Gate;
