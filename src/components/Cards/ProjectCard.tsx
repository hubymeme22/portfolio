import { Box, Typography } from "@mui/material";
import FlexBox from "../FlexBox";
import { ProjectCardProps } from "../../interfaces/props";

const ProjectCard: React.FC<ProjectCardProps> = ({
  iconType,
  summaryContent,
  title,
  githubLink,
  mergeReqLink,
  style,
}) => {
  return (
    <Box
      style={style}
      sx={{
        height: "330px",
        width: "350px",
        border: "1px solid black",
        cursor: "pointer",
        transition: "0.3s",
        padding: "10px",
        // boxShadow: "0px 2px 5px 1px var(--shadow-light)",
        ":hover": {
          translate: "0px -10px",
          boxShadow: "0px 4px 15px 3px var(--shadow-light)",
        },
      }}
    >
      <FlexBox flexDirection="row" gap="10px">
        {iconType == "web" && (
          <img src={`/icons/5.svg`} height="25px" width="25px" />
        )}
        {iconType == "algo" && (
          <img src={`/icons/4.svg`} height="25px" width="25px" />
        )}
        {iconType == "tool" && (
          <img src={`/icons/2.svg`} height="23px" width="23px" />
        )}
        <Typography component="span" fontWeight="bold">
          {title}
        </Typography>
      </FlexBox>
      <hr />
      <FlexBox flexDirection="row" gap="10px" height="235px" overflow="hidden">
        <Typography align="justify">{summaryContent}</Typography>
      </FlexBox>
      <hr />
      <FlexBox flexDirection="row" gap="10px">
        <img
          title="Open Github Project"
          src="/icons/3.svg"
          height="25px"
          width="25px"
          style={{ borderRadius: "50%" }}
          onClick={() => {
            location.href =
              githubLink ?? "https://github.com/hubymeme22/Lazy01";
          }}
        />
        <img
          title="Copy repository clone command"
          src="/icons/1.svg"
          height="25px"
          width="25px"
          style={{ borderRadius: "50%" }}
          onClick={() => {
            location.href =
              mergeReqLink ?? "https://github.com/hubymeme22/Lazy01";
          }}
        />
      </FlexBox>
    </Box>
  );
};

export default ProjectCard;
