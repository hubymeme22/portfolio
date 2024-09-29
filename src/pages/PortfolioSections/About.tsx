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
            Experienced Backend Developer with a strong background in building
            and optimizing server-side applications and APIs. Skilled in various
            programming languages and focused on performance and security.
            Effective at working with teams to create reliable and efficient
            solutions. Ready to contribute to exciting projects and enhance
            technical operations.
            <br />
            <br />I have a deep curiosity about the latest technological
            advancements and cybersecurity trends. Staying informed about
            emerging technologies and best practices in security allows me to
            build robust applications that not only perform well but also
            protect user data. I regularly engage with industry publications,
            and forums to explore innovative solutions and enhance my
            understanding of potential vulnerabilities, ensuring that I can
            proactively address security challenges in every project I
            undertake.
            <br />
            <br />
            and also... I love physics
          </Box>
        </Box>
      </Box>
      <PageFiller heightFill="15vh" />
    </FlexBox>
  );
};

export default About;
