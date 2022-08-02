import { useState, useEffect } from "react";

import { Button, Container, Grid, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ProfileImg from "assets/img/profile_img.jpeg";

const Header = ({ height, isMobile, isTablet }) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isHeaderContentOn, setIsHeaderContentOn] = useState(false);

  const transitionTime = 0.4;
  const navlinkList = [
    { id: "stack", label: "기술 스택" },
    { id: "education", label: "학력" },
    { id: "career", label: "경력" },
    { id: "project", label: "프로젝트" },
    { id: "self", label: "자기소개" },
  ];

  useEffect(() => {
    if (isHeaderOpen) {
      setTimeout(() => {
        setIsHeaderContentOn(true);
      }, transitionTime * 0.3 * 1000);
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
        <Container>
          <Grid container justifyContent="space-between">
            <Grid
              className="flex"
              sx={{
                px: isMobile || isTablet ? 2 : 4,
                py: isHeaderOpen ? 2 : 1,
                height: `${isHeaderOpen ? height * 8 * 4 : height * 8}px`,
                transition: `all ${transitionTime}s`,
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
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ ml: isMobile || isTablet ? 2 : 4 }}
              >
                <Grid>
                  {isHeaderContentOn ? (
                    <Grid sx={{ py: 1 }}>
                      <span className="weight700 size28 colorPrimary9">
                        양희영
                      </span>
                    </Grid>
                  ) : null}
                </Grid>
                <Grid container>
                  {navlinkList.map((navlink) => {
                    return (
                      <Button
                        key={`navBtn_${navlink.id}`}
                        sx={{ mr: isMobile ? 0.5 : 1.5 }}
                      >
                        <span className="colorPrimary8 size15">
                          {navlink.label}
                        </span>
                      </Button>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid className="flex">
              <IconButton
                className="headerToggleButton"
                onClick={isHeaderOpen ? handleDrawerClose : handleDrawerOpen}
              >
                {isHeaderOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </header>
  );
};

export default Header;
