import { useState } from "react";

import { Button, Drawer, Grid } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = ({ height }) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsHeaderOpen(true);
  };
  const handleDrawerClose = () => {
    setIsHeaderOpen(false);
  };

  return (
    <header>
      <Grid
        className="fullWidth headerContainer"
        sx={{
          height: `${isHeaderOpen ? height * 8 * 4 : height * 8}px`,
          transition: "height 0.5s",
          backgroundColor: "var(--bright3)",
        }}
      >
        <Grid>헤더</Grid>
        <Grid className="fullHeight flex">
          <Button
            endIcon={
              isHeaderOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            onClick={isHeaderOpen ? handleDrawerClose : handleDrawerOpen}
          ></Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
