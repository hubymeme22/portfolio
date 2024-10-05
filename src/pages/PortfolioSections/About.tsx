import SectionDivider from "../../components/SectionDivider";
import FlexBox from "../../components/FlexBox";
import PageFiller from "../../components/PageFiller";
import { useContext } from "react";
import MobileExperience from "../../contexts/MobileExperience";

const About: React.FC = () => {
  const mobileExperience = useContext(MobileExperience);

  return (
    <FlexBox
      height="100%"
      justifyContent="center"
      style={{ animation: "fadeIn 1s forwards" }}
    >
      <SectionDivider
        text="About Me"
        width={mobileExperience ? "95%" : "65%"}
      />
      <FlexBox
        display="flex"
        width="100%"
        marginTop="3vh"
        justifyContent="center"
      >
        <FlexBox
          margin="auto"
          width={mobileExperience ? "95%" : "65%"}
          flexDirection={mobileExperience ? "column" : "row"}
          alignItems="center"
          gap="2em"
        >
          <FlexBox justifyContent="center">
            <img
              src="/profile.jpeg"
              height={mobileExperience ? "220px" : "300px"}
              width={mobileExperience ? "220px" : "300px"}
              style={{
                border: "none",
                borderRadius: "50%",
                boxShadow: "0 2px 10px 2px var(--shadow-light)",
              }}
            />
          </FlexBox>
          <FlexBox textAlign="justify" alignItems="center">
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
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default About;
