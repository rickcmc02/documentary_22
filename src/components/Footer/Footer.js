import { Container, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({ height, containerMaxWidth }) => {
  const toGithub = () => {
    window.open("https://github.com/rickcmc02", "_blank");
  };

  return (
    <footer
      style={{
        height: height * 8,
      }}
    >
      <Container maxWidth="false" sx={{ maxWidth: `${containerMaxWidth}px` }}>
        <Grid
          className="flex contentSpaceBetween"
          sx={{
            borderTop: "1px solid var(--bright3)",
            color: "var(--bright4)",
            p: 2,
          }}
        >
          <Grid>
            <IconButton className="footerIconBtn" onClick={toGithub}>
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid>
            <span className="colorBright5 weight300 size14">
              Copyright 2022. retriever0 all rights reserved
            </span>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
