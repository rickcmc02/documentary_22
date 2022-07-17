import { useState, useEffect } from "react";

import { Button, Container, Drawer, Grid } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ProfileImg from "assets/img/profile_img.jpeg";

const Header = ({ height, isMobile, isTablet }) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isHeaderContentOn, setIsHeaderContentOn] = useState(false);

  const transitionTime = 0.4;

  useEffect(() => {
    if (isHeaderOpen) {
      setTimeout(() => {
        setIsHeaderContentOn(true);
      }, transitionTime * 0.5 * 1000);
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
      <Container>
        <Grid
          className="fullWidth headerContainer"
          sx={{
            height: `${isHeaderOpen ? height * 8 * 4 : height * 8}px`,
            transition: `height ${transitionTime}s`,
          }}
        >
          <Grid
            className="flex fullWidth"
            sx={{
              px: isMobile || isTablet ? 2 : 4,
              py: isHeaderOpen ? 2 : 1,
              transition: `padding ${transitionTime}s`,
            }}
          >
            <Button
              sx={{ borderRadius: "100px", minWidth: 0, m: -0.75 }}
              onClick={isHeaderOpen ? handleDrawerClose : handleDrawerOpen}
            >
              <img
                src={ProfileImg}
                className="profileImg"
                style={{
                  maxWidth: isMobile ? "70px" : isTablet ? "140px" : "none",
                  maxHeight: isMobile ? "70px" : isTablet ? "140px" : "none",
                }}
              />
            </Button>
            {isHeaderContentOn ? (
              <Grid
                className="flex contentSpaceBetween"
                sx={{
                  ml: isMobile || isTablet ? 2 : 4,
                  py: 1,
                  width: "80%",
                  flexDirection: "column",
                }}
              >
                <span className="weight700 size28 colorColor5">양희영</span>
                <span>내브바</span>
              </Grid>
            ) : null}
            <Grid></Grid>
          </Grid>
          <Grid className="fullHeight flex">
            <Button
              onClick={isHeaderOpen ? handleDrawerClose : handleDrawerOpen}
            >
              {isHeaderOpen ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
