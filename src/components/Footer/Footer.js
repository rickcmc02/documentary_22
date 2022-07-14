import { Grid } from "@mui/material";

const Footer = ({ height }) => {
  return (
    <footer>
      <Grid
        sx={{
          borderTop: "1px solid var(--bright2)",
          color: "var(--bright3)",
          height: height * 8,
        }}
      >
        Copyright 2022. retriever0 all rights reserved
      </Grid>
    </footer>
  );
};

export default Footer;
