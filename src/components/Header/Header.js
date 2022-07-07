import { useState } from "react";

import { Button, Drawer, Grid } from "@mui/material";

const Header = ({ height }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <header>
      <Grid className="fullWidth headerContainer">
        헤더
        <Button onClick={toggleDrawer}>헤더 오픈</Button>
      </Grid>
      <Drawer open={isDrawerOpen}></Drawer>
    </header>
  );
};

export default Header;
