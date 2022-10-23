import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toNavPage } from "redux/slices/page";

import { Button, Container, Grid, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import IdPhoto from "assets/img/profile/id_photo.jpeg";

const Header = ({ height, containerMaxWidth, isMobile, isTablet }) => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isHeaderContentOn, setIsHeaderContentOn] = useState(false);

  const transitionTime = 0.4;
  const navlinkList = [
    { id: "main", label: "홈" },
    { id: "stack", label: "기술" },
    { id: "education", label: "학력" },
    { id: "experience", label: "경력" },
    { id: "project", label: "프로젝트" },
  ];

  useEffect(() => {
    if (isHeaderOpen) {
      const headerConInterv = setTimeout(() => {
        setIsHeaderContentOn(true);
      }, transitionTime * 0.7 * 1000);

      return () => {
        clearTimeout(headerConInterv);
      };
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

  const handleNavTarget = (navId) => {
    navigate(`/${navId}`);
    dispatch(toNavPage(navId));
  };

  const onClickProfile = () => {
    if (isHeaderOpen) handleDrawerClose();
    else handleDrawerOpen();
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
        <Container maxWidth="false" sx={{ maxWidth: `${containerMaxWidth}px` }}>
          <Grid container justifyContent="space-between">
            <Grid
              className="flex"
              sx={{
                py: isHeaderOpen ? 2 : 1,
                height: `${isHeaderOpen ? height * 8 * 4 : height * 8}px`,
                transition: `all ${transitionTime}s`,
              }}
            >
              <Button sx={{ minWidth: 0, my: -0.75 }} onClick={onClickProfile}>
                <img
                  src={IdPhoto}
                  className="profileImg"
                  style={{
                    borderRadius: "100px",
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
                    <Grid sx={{ p: 1 }}>
                      <Grid>
                        <span className="weight700 size28 colorPrimary9">
                          양희영
                        </span>
                      </Grid>
                      <Grid sx={{ mt: 1, ml: 0.5 }}>
                        <span className="weight300 size18 colorPrimary8">
                          github.com/rickcmc02
                        </span>
                      </Grid>
                      <Grid sx={{ mt: 1, ml: 0.5 }}>
                        <span className="weight300 size18 colorPrimary8">
                          aa87565115@gmail.com
                        </span>
                      </Grid>
                    </Grid>
                  ) : null}
                </Grid>
                <Grid container>
                  {navlinkList.map((navlink) => (
                    <Button
                      key={`navBtn_${navlink.id}`}
                      sx={{ mr: isMobile ? 0.5 : 1.5 }}
                      onClick={() => {
                        handleNavTarget(navlink.id);
                      }}
                    >
                      <span className="colorPrimary8 size15">
                        {navlink.label}
                      </span>
                    </Button>
                  ))}
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
