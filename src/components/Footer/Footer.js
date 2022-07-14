import { Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({ height }) => {
  const toGithub = () => {
    window.location.href = "https://github.com/rickcmc02";
  };

  return (
    <footer>
      <Grid
        className="flex contentSpaceBetween"
        sx={{
          borderTop: "1px solid var(--bright3)",
          color: "var(--bright4)",
          height: height * 8,
          p: 3,
        }}
      >
        <Grid>
          <IconButton sx={{ p: 0 }} onClick={toGithub}>
            <GitHubIcon className="colorBright4" />
          </IconButton>
        </Grid>
        <Grid>Copyright 2022. retriever0 all rights reserved</Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
