import { useState } from "react";

import { Button, Grid } from "@mui/material";

const Header = ({ height }) => {
  const handleHeader = () => {};

  return (
    <header>
      <Grid
        className="fullWidth headerContainer"
        sx={
          {
            //   height: height * 8,
          }
        }
      >
        헤더
        <Button onClick={handleHeader}>헤더 오픈</Button>
      </Grid>
    </header>
  );
};

export default Header;
