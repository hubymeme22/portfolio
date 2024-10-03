import { Box } from "@mui/material";
import SectionDivider from "../../components/SectionDivider";
import FlexBox from "../../components/FlexBox";
import PageFiller from "../../components/PageFiller";

const About: React.FC = () => {
  return (
    <FlexBox
      height="100%"
      justifyContent="center"
      style={{ animation: "fadeIn 1s forwards" }}
    >
      <SectionDivider text="About Me" width="65%" />
      <Box display="flex" width="100%" marginTop="3vh" justifyContent="center">
        <Box display="flex" width="65%" gap="3em">
          <Box display="flex" justifyContent="center">
            <img
              src="/profile.jpeg"
              height="300px"
              width="300px"
              style={{
                border: "none",
                borderRadius: "50%",
                boxShadow: "0 2px 10px 2px var(--shadow-light)",
              }}
            />
          </Box>
          <Box display="flex" textAlign="justify" alignItems="center">
            Hi! I'm Hubert Espinola, a recent graduate with a BS in Computer
            Science from Batangas State University. I'm a developer focused on
            cybersecurity and API development. I've worked on various projects
            that emphasize performance and security. Right now, I'm part of a
            great team at CP Health Innovation as a cybersecurity analyst, where
            I'm learning a lot.
            <br />
            <br />I have a strong interest in new technology and cybersecurity
            trends. I stay updated on the latest tools and practices to create
            applications that work well and keep user data safe. I read industry
            articles and join forums to find new ideas and understand possible
            security issues, so I can tackle challenges in every project I work
            on.
          </Box>
        </Box>
      </Box>
      <PageFiller heightFill="15vh" />
    </FlexBox>
  );
};

export default About;
