import { Grid } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";

function ShowSource({ title, sourceData }) {
  const imgSize = "56px";

  const clickableLinkIcon = (type) => {
    const linkIconSx = {
      mt: -0.5,
      fill: "var(--bright1)",
    };
    if (type === "web") return <PublicIcon sx={linkIconSx} />;
    else if (type === "github") return <GitHubIcon sx={linkIconSx} />;
  };

  return (
    <Grid sx={{ px: 1, py: 3, borderTop: "1px solid var(--bright3)" }}>
      <Grid sx={{ mb: 1 }}>
        <span className="size18 weight700 colorBright6">{title}</span>
      </Grid>
      {sourceData.map((data, idx) => (
        <Grid
          container
          key={`sourcedata_${title}_${idx}`}
          alignItems="center"
          className={
            data.linkUrl
              ? "hoverBackgroundLight radius8 cursorPointer"
              : undefined
          }
          sx={{ ml: -0.5, pl: 1.5 }}
          onClick={() => {
            if (data.linkUrl) {
              window.open(data.linkUrl);
            }
          }}
        >
          {data.imgSrc && (
            <Grid
              className="flex itemsCenter contentCenter"
              sx={{
                borderRadius: "16px",
                width: imgSize,
                height: imgSize,
                backgroundColor: "var(--gray0)",
              }}
            >
              <img
                src={data.imgSrc}
                style={{ width: "40px", borderRadius: "10px" }}
              />
            </Grid>
          )}
          <Grid sx={{ width: `calc(100% - ${imgSize})`, p: 1.5 }}>
            {data.content && (
              <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                <span className="colorBright7 size18">{data.content}</span>
                {data.linkUrl && clickableLinkIcon(data.linkType)}
              </Grid>
            )}
            <Grid container>
              {data.detail && (
                <Grid item xs={12} md={10} lg={11} sx={{ mb: 0.5 }}>
                  <span className="colorBright6 size16 weight300">
                    {data.detail}
                  </span>
                </Grid>
              )}
              {data.period && (
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={1}
                  container
                  justifyContent="flex-end"
                >
                  <span className="colorBright5 size15">{data.period}</span>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowSource;
