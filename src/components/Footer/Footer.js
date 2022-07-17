import { Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({ height }) => {
  const toGithub = () => {
    window.open("https://github.com/rickcmc02", "_blank");
  };

  return (
    <footer>
      <Grid
        className="flex contentSpaceBetween"
        sx={{
          borderTop: "1px solid var(--bright3)",
          color: "var(--bright4)",
          height: height * 8,
          p: 2,
        }}
      >
        <Grid>
          <IconButton className="footerIconBtn" onClick={toGithub}>
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid sx={{ p: 1 }}>
          <span className="colorBright5 weight300 size14">
            Copyright 2022. retriever0 all rights reserved
          </span>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
