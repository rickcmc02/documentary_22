import { Grid } from "@mui/material";

import YonseiLogo from "assets/img/logo/yonsei.png";

function Education() {
  return (
    <Grid>
      <Grid container alignItems="center">
        <Grid>
          <img src={YonseiLogo} style={{ width: "40px" }} />
        </Grid>
        <Grid>연세대학교 경영학과</Grid>
        <Grid>(GPA 3.56/4.5) </Grid>
        <Grid>`20 졸업</Grid>
      </Grid>
      <Grid container>
        <Grid>엔코아 Playdata 개발자 양성과정</Grid>
        <Grid>프로젝트 우수상</Grid>
        <Grid>`20 수료</Grid>
      </Grid>
      <Grid container>
        OPIc 영어말하기테스트 IH (Intermediate High) - `22 취득
      </Grid>
      <Grid container>
        매경테스트 경제이해도 최우수등급 (상위 0.3%) - `20 취득
      </Grid>
      <Grid container>삼일회계법인 회계관리1급 (회계, 세법) - `21 취득</Grid>
    </Grid>
  );
}

export default Education;
