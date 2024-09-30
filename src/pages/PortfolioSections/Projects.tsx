import { useState } from "react";
import MenuButton from "../../components/Buttons/MenuButton";
import FlexBox from "../../components/FlexBox";
import PageFiller from "../../components/PageFiller";
import SectionDivider from "../../components/SectionDivider";

const Projects: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <FlexBox
      justifyContent="center"
      style={{ animation: "fadeIn 1s forwards" }}
    >
      <PageFiller heightFill="15vh" />
      <SectionDivider text="Projects" width="75%" />
      <PageFiller heightFill="4vh" />

      <FlexBox
        justifyContent="space-around"
        alignItems="center"
        flexDirection="row"
        width="75%"
        margin="auto"
        gap="2em"
      >
        <MenuButton
          active={selectedPage === 0}
          label="Cybersecurity Tools"
          style={{
            fontSize: "15pt",
            fontWeight: "bold",
          }}
          onClick={() => {
            setSelectedPage(0);
          }}
        />
        <MenuButton
          active={selectedPage === 1}
          label="Backend Systems"
          style={{
            fontSize: "15pt",
            fontWeight: "bold",
          }}
          onClick={() => {
            setSelectedPage(1);
          }}
        />
        <MenuButton
          active={selectedPage === 2}
          label="Random Projects"
          style={{
            fontSize: "15pt",
            fontWeight: "bold",
          }}
          onClick={() => {
            setSelectedPage(2);
          }}
        />
      </FlexBox>
      <FlexBox
        justifyContent="space-around"
        alignItems="center"
        flexDirection="row"
        width="75%"
        margin="auto"
        gap="2em"
        marginTop="2em"
      >
        [contents here]
      </FlexBox>
    </FlexBox>
  );
};

export default Projects;
