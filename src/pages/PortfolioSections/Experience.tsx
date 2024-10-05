import FlexBox from "../../components/FlexBox";
import SectionDivider from "../../components/SectionDivider";
import PageFiller from "../../components/PageFiller";
import { Typography } from "@mui/material";
import Chip from "../../components/Chips/Chip";
import MultipleMinimalAccordion from "../../components/Accordions/MultipleMinimalAccordion";
import { useContext } from "react";
import MobileExperience from "../../contexts/MobileExperience";

interface RepeatingContentProps {
  title: string;
  chipList: {
    label: string;
    color: string;
    bgcolor: string;
  }[];
}

const RepeatingContent: React.FC<RepeatingContentProps> = ({
  title,
  chipList,
}) => {
  return (
    <>
      <Typography
        fontWeight="bold"
        fontFamily="Roboto Condensed"
        color="var(--secondary-accordion-border-light)"
        gutterBottom
      >
        {/* Tools & Techstack */}
        {title}
      </Typography>
      <FlexBox flexDirection="row" flexWrap="wrap" gap="8px">
        {chipList.map((chip, id) => {
          return (
            <Chip
              key={id}
              bgcolor={chip.bgcolor}
              color={chip.color}
              label={chip.label}
            />
          );
        })}
      </FlexBox>
    </>
  );
};

const Experience: React.FC = () => {
  const mobileExperience = useContext(MobileExperience);

  return (
    <FlexBox
      justifyContent="center"
      style={{ animation: "fadeIn 1s forwards" }}
    >
      {!mobileExperience && <PageFiller heightFill="25vh" />}
      {mobileExperience && <PageFiller heightFill="10vh" />}
      <SectionDivider
        text="Experiences & Awards"
        width={mobileExperience ? "98%" : "65%"}
      />

      <Typography
        color="var(--secondary-accordion-border-light)"
        marginTop="1em"
        textAlign="center"
        style={{ animation: "fadeIn 4s forwards" }}
      >
        Here's a summary of my experiences related to backend development &
        cybersecurity; (click to expand details).
      </Typography>
      <FlexBox
        width={mobileExperience ? "98%" : "65%"}
        margin="0 auto"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        rowGap="1.5em"
        columnGap="1em"
        marginTop="2em"
      >
        <MultipleMinimalAccordion
          data={[
            {
              title: "CP Health Innovations",
              subtitle: "Cybersecurity Analyst (Jun 2024 - Present)",
              textContent:
                "Currently, I'm a cybersecurity analyst focused on conducting vulnerability assessments for CareGo EMR. I also handle patch management and develop security tools, including web application firewalls.",
              content: (
                <RepeatingContent
                  title="Tools & Techstack"
                  chipList={[
                    { bgcolor: "#3c69a6", color: "white", label: "React+TS" },
                    { bgcolor: "#dd844e", color: "white", label: "Laravel" },
                    { bgcolor: "#12664f", color: "white", label: "MySQL" },
                    { bgcolor: "#13a7ad", color: "white", label: "Burpsuite" },
                    { bgcolor: "#76afc6", color: "white", label: "Nmap" },
                    {
                      bgcolor: "#ee7508",
                      color: "white",
                      label: "Amazon Lightsail",
                    },
                    {
                      bgcolor: "#ddb100",
                      color: "white",
                      label: "Python Scripting",
                    },
                  ]}
                />
              ),
            },
            {
              title: "CP Health Innovations",
              subtitle: "Fullstack Developer (Nov 2024 - May 2024)",
              textContent:
                "I was responsible for developing web application features as requested. Specifically, I work on creating API endpoints, designing the web UI by reusing the company's React components, and building new components as needed.",
              content: (
                <RepeatingContent
                  title="Tools & Techstack"
                  chipList={[
                    { bgcolor: "#3c69a6", color: "white", label: "React+TS" },
                    { bgcolor: "#13a7ad", color: "white", label: "ExpressJS" },
                    { bgcolor: "#dd844e", color: "white", label: "Laravel" },
                    { bgcolor: "#12664f", color: "white", label: "MySQL" },
                    { bgcolor: "#497500", color: "white", label: "Sequelize" },
                    {
                      bgcolor: "#ddb100",
                      color: "white",
                      label: "Python Scripting",
                    },
                  ]}
                />
              ),
            },
            {
              title: "iSite x Stackleague",
              subtitle: "Regionals Programming competition - 4th place",
              textContent:
                "I was one of the selected students by the university to represent our school in the regional programming competition at LPU Calamba, Laguna. During the competition, I solved various programming challenges, primarily focusing on dynamic algorithm problems.",
              imageSlide: ["/regionals1.jpg"],
              content: (
                <RepeatingContent
                  title="Language & Learnings"
                  chipList={[
                    { bgcolor: "#12664f", color: "white", label: "Algorithms" },
                    {
                      bgcolor: "purple",
                      color: "white",
                      label: "Data Structures",
                    },
                    {
                      bgcolor: "#3c69a6",
                      color: "white",
                      label: "Optimization",
                    },
                    {
                      bgcolor: "#ddb100",
                      color: "white",
                      label: "Python Scripting",
                    },

                    {
                      bgcolor: "#4d4d4d",
                      color: "white",
                      label: "Dynamic Programming",
                    },
                  ]}
                />
              ),
            },
            {
              title: "iSite National",
              subtitle: "National Programming competition - 3rd place",
              textContent:
                "I competed against various schools with challenging problem sets, focusing on mathematical problems, dynamic programming, and multi-dimensional arrays.",
              imageSlide: ["/nationals2.jpg", "/nationals1.jpg"],
              content: (
                <RepeatingContent
                  title="Language & Learnings"
                  chipList={[
                    { bgcolor: "#12664f", color: "white", label: "Algorithms" },
                    {
                      bgcolor: "purple",
                      color: "white",
                      label: "Data Structures",
                    },
                    {
                      bgcolor: "#3c69a6",
                      color: "white",
                      label: "Optimization",
                    },
                    {
                      bgcolor: "red",
                      color: "white",
                      label: "C-language",
                    },

                    {
                      bgcolor: "#4d4d4d",
                      color: "white",
                      label: "Dynamic Programming",
                    },
                  ]}
                />
              ),
            },
            {
              title: "TryHackMe",
              subtitle: "CTF Challenges mostly related on web exploitation",
              imageSlide: ["/thm1.png", "/thm2.png"],
              textContent:
                "In my free time, I enjoy solving CTF challenges, particularly in web exploitation. Most of the challenges I tackle involve vulnerabilities related to various injection techniques like SQLi, PHPi, and XSS, as well as issues with weak encryption methods like AES-CBC and misconfigurations related to local and remote file inclusion.",
              content: (
                <RepeatingContent
                  title="Tools & Learnings"
                  chipList={[
                    {
                      bgcolor: "purple",
                      color: "white",
                      label: "Web Exploitation",
                    },
                    { bgcolor: "#12664f", color: "white", label: "Encryption" },
                    { bgcolor: "#13a7ad", color: "white", label: "Burpsuite" },
                    { bgcolor: "#76afc6", color: "white", label: "Nmap" },
                  ]}
                />
              ),
            },
            {
              title: "Technofusion",
              subtitle: "CTF Challenges mostly related on web exploitation",
              textContent:
                "I competed against other IT and CS students in our college department, representing my faction and winning first place. I solved a majority of the problems, which focused on dynamic programming challenges.",
              imageSlide: ["/technofusion.png"],
              content: (
                <RepeatingContent
                  title="Language & Learnings"
                  chipList={[
                    {
                      bgcolor: "purple",
                      color: "white",
                      label: "Data Structures",
                    },
                    { bgcolor: "#12664f", color: "white", label: "Algorithms" },
                    {
                      bgcolor: "#ddb100",
                      color: "white",
                      label: "Python",
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </FlexBox>
      <PageFiller heightFill="5vh" />
    </FlexBox>
  );
};

export default Experience;
