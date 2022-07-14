import { useState, useEffect } from "react";

import { Button, Drawer, Grid } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ProfileImg from "assets/img/profile_img.jpeg";

const Header = ({ height }) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isHeaderContentOn, setIsHeaderContentOn] = useState(false);

  const transitionTime = 0.5;

  useEffect(() => {
    if (isHeaderOpen) {
      setTimeout(() => {
        setIsHeaderContentOn(true);
      }, transitionTime * 0.7 * 1000);
    } else {
      setIsHeaderContentOn(false);
    }
  }, [isHeaderOpen]);

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
          transition: `height ${transitionTime}s`,
        }}
      >
        <Grid className="flex" sx={{ px: 3, py: 1.5 }}>
          <img src={ProfileImg} className="profileImg" />
          {isHeaderContentOn ? (
            <Grid sx={{ ml: 3 }}>
              <p>양희영</p>
            </Grid>
          ) : null}
          <Grid></Grid>
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
