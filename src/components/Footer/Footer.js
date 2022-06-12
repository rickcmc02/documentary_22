import { Grid } from "@mui/material";

const Footer = ({ height }) => {
  return (
    <footer>
      <Grid
        sx={{
          height: height * 8,
        }}
      >
        푸터
      </Grid>
    </footer>
  );
};

export default Footer;
