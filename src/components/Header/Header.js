import { useState } from "react";

import { Button, Drawer, Grid } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ProfileImg from "assets/img/profile_img.jpeg";

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
          boxShadow: "var(--bright3) 0px 0px 20px 0px",
        }}
      >
        <Grid className="flex" sx={{ px: 2.5, py: 1 }}>
          <img src={ProfileImg} className="profileImg" />
          {isHeaderOpen ? (
            <Grid sx={{ ml: 3 }}>
              <p>양희영</p>
            </Grid>
          ) : null}
        </Grid>
        <Grid className="fullHeight flex">
          <Button onClick={isHeaderOpen ? handleDrawerClose : handleDrawerOpen}>
            {isHeaderOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
