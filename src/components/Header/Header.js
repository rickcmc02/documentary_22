import { useState } from "react";

import { Button, Drawer, Grid } from "@mui/material";
import {
  KeyboardArrowUpIcon,
  KeyboardArrowDownIcon,
} from "@mui/icons-material";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = ({ height }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <header>
      <Grid className="fullWidth headerContainer">
        헤더
        <Button onClick={handleDrawerOpen}>헤더 오픈</Button>
      </Grid>
      <Drawer open={isDrawerOpen}></Drawer>
    </header>
  );
};

export default Header;
