import { useState } from "react";
import MenuButton from "../../components/Buttons/MenuButton";
import FlexBox from "../../components/FlexBox";
import PageFiller from "../../components/PageFiller";
import SectionDivider from "../../components/SectionDivider";
import ProjectCard from "../../components/Cards/ProjectCard";

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
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        width="75%"
        margin="auto"
        gap="2em"
        marginTop="2em"
        flexWrap="wrap"
      >
        {selectedPage === 0 && (
          <>
            <ProjectCard
              iconType="tool"
              title="Lazy-01"
              summaryContent="
          A lightweight pentesting tool for analyzing http packets written in python. This tool works similarly
          to burpsuite and was made specifically for testing the OWASP Top10's broken access, the tool also
          supports saving session which is only present on burpsuite's Professional version."
              githubLink="https://github.com/hubymeme22/Lazy01"
              mergeReqLink="git clone https://github.com/hubymeme22/Lazy01.git"
            />
            <ProjectCard
              iconType="tool"
              title="N0LL-22 - Discord malware"
              summaryContent="
          A Discord Malware proof of concept. This program was made to show how bot APIs such as discord's or telegram's
          can be taken advantage of and be used as remote code execution backdoor (to avoid misuse, I did not designed it
          to attach to other processes).
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Laravel WAF (in-progress)"
              summaryContent="
          A simple lightweight web application firewall package detecting web application attacks such as sqli, xss, lfi, etc.
          the firewall logic is also highly customizable/programmable for other flexible implementation (e.g. creation of class
          for detecting IDOR attacks).
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="algo"
              title="HebiNet"
              summaryContent="
          A simple network proxy library for hidden communication, taking advantage of Diffie hellman key exchange
          and CollzEnc encryption made by me. This encryption takes advantage of Collatz conjecture's randomness, thus
          increasing its avalanche effect without consuming too much memory.
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="algo"
              title="CollzEnc"
              summaryContent="
              ...
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="algo"
              title="Autothysia"
              summaryContent="
              ...
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
          </>
        )}
        {selectedPage === 1 && (
          <>
            <ProjectCard
              iconType="web"
              title="IRIS - Backend"
              summaryContent="
          A funded project by the university for seamless integration of machine learning on surveillance systems that
          currently do not support one. This project uses python flask for backend, sqlite for database, and pytorch
          for connecting to YOLO Computer vision algorithm.
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Laravel WAF (in-progress)"
              summaryContent="
          A simple lightweight web application firewall package detecting web application attacks such as sqli, xss, lfi, etc.
          the firewall logic is also highly customizable/programmable for other flexible implementation (e.g. creation of class
          for detecting IDOR attacks).
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="OPCR Project"
              summaryContent="
          OPCR API backend or Office Performance Commitment Review (OPCR) is a project used for recording,
          reporting and analyzing office performance. Different variations of the projects were released
          because of different user-requests (university).
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Alumni Web App"
              summaryContent="
              ...
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="BatStateU Tenants"
              summaryContent="
              ...
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Student Violation Tracking System"
              summaryContent="
              ...
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Wordle Battle API"
              summaryContent="
              ...
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
          </>
        )}

        {selectedPage === 2 && (
          <>
            <ProjectCard
              iconType="algo"
              title="Boolean Tree Reduction"
              summaryContent="
              ...
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
          </>
        )}
      </FlexBox>
      <PageFiller heightFill="4vh" />
    </FlexBox>
  );
};

export default Projects;
