import { Button, Grid } from "@mui/material";

const Header = ({ height }) => {
  const handleHeader = () => {};

  return (
    <header>
      <Grid
        className="fullWidth"
        sx={{
          height: height * 8,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
      >
        헤더
        <Button onClick={handleHeader}>헤더 오픈</Button>
      </Grid>
    </header>
  );
};

export default Header;
