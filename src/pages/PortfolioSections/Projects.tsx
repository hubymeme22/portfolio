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
          A simple lightweight web application firewall package for detecting web application attacks such as sqli, xss, lfi, etc.
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
          A simple encryption algorithm that utilizes the Collatz conjecture's randomness. This library is written in C language
          and is designed to encrypt/decrypt files and folders.
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="algo"
              title="Autothysia"
              summaryContent="
          A simple Java program for encrypting files with a minimalistic UI. This simple program was designed to have a one-time attempt
          for decrypting files and is designed to corrupt the files when wrong credentials are provided.
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
         (by default) do not support one. This project uses python flask for backend, sqlite for database, and pytorch
          for connecting to YOLO Computer vision algorithm.
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Laravel WAF (in-progress)"
              summaryContent="
          A simple lightweight web application firewall package for detecting web application attacks such as sqli, xss, lfi, etc.
          the firewall logic is also highly customizable/programmable for other flexible implementation (e.g. creation of class
          for detecting IDOR attacks).
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="BSULazyScheduling"
              summaryContent="
          A commissioned project for automating schedule checking in the university. This program also offers automated checking of
          schedule conflicts and possible conflicts for sudden transition of face-to-face classes to online class"
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="OPCR Project"
              summaryContent="
          OPCR API backend or Office Performance Commitment Review (OPCR) is a project that can be used for recording,
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
          A web application created for authenticating alumni students in Batangas State University. This system also can offer
          different opportunities through its features for job, announcements, and news posting.
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="BatStateU Tenants"
              summaryContent="
          A commissioned project by IE students, and was used to automate students from notification, calculation, and distribution
          of payments for tennants.
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Wordle Battle API"
              summaryContent="
          Simple API created where logic from game 'wordle' was created from scratch to demonstrate different programming design patterns.
          This system also enables multiplayers so players can compete with other players as well.
          "
              githubLink="https://github.com/hubymeme22"
              mergeReqLink=""
            />
            <ProjectCard
              iconType="web"
              title="Student Violation Tracking System"
              summaryContent="
          A simple system for tracking student violations and history. This system also includes analytics that can be used
          to track students' behavior on the past weeks/months/years.
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
          A simple datastructure and algorithm concept to simplify a boolean tree. This simple algorithm I created simplifies boolean tree
          by triming the similar leaves, freeing space thus utlizing memory better.
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
