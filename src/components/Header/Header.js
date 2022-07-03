import { Grid } from "@mui/material";

const Header = ({ height }) => {
  return (
    <header>
      <Grid
        className="fullWidth"
        sx={{
          height: height * 8,
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        헤더
      </Grid>
    </header>
  );
};

export default Header;
