import { Grid } from "@mui/material";

import YonseiLogo from "assets/img/logo/yonsei.png";
import EncoreLogo from "assets/img/logo/encore.png";
import OpicLogo from "assets/img/logo/opic.png";
import MKTestLogo from "assets/img/logo/mktest.png";
import SamilLogo from "assets/img/logo/samil.png";

function Education() {
  const eduSoruce = [
    {
      content: "연세대학교 경영학과",
      detail: "GPA 3.56 / 4.5",
      period: "`20 졸업",
      imgSrc: YonseiLogo,
    },
    {
      content: "엔코아 Playdata 개발자 양성과정",
      detail: "프로젝트 우수상",
      period: "`20 수료",
      imgSrc: EncoreLogo,
    },
    {
      content: "OPIc 영어말하기테스트",
      detail: "IH (Intermediate High)",
      period: "`22 취득",
      imgSrc: OpicLogo,
    },
    {
      content: "국가공인 매경TEST",
      detail: "경제이해도 최우수등급 (상위 0.3%)",
      period: "`21 취득",
      imgSrc: MKTestLogo,
    },
    {
      content: "삼일회계법인 회계관리1급",
      detail: "회계, 세법",
      period: "`21 취득",
      imgSrc: SamilLogo,
    },
  ];

  return (
    <Grid>
      {eduSoruce.map((edu) => (
        <Grid container alignItems="center">
          {edu.imgSrc && <img src={edu.imgSrc} style={{ width: "40px" }} />}
          <Grid>{edu.content}</Grid>
          <Grid>{edu.detail}</Grid>
          <Grid>{edu.period}</Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Education;
