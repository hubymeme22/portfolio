import FlexBox from "../../components/FlexBox";
import SectionDivider from "../../components/SectionDivider";
import PageFiller from "../../components/PageFiller";
import { Typography } from "@mui/material";
import Chip from "../../components/Chips/Chip";
import MultipleMinimalAccordion from "../../components/Accordions/MultipleMinimalAccordion";

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
  return (
    <FlexBox
      justifyContent="center"
      style={{ animation: "fadeIn 1s forwards" }}
    >
      <PageFiller heightFill="25vh" />
      <SectionDivider text="Experiences" width="65%" />

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
        width="65%"
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
                "Currently a cybersecurity analyst responsible for performing vulnerability assessments on CareGo EMR—also responsible for providing patches and the development of security tools such as web application firewalls.",
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
                "Responsible for development of web application features requested. Specifically, I was assigned on development of API endpoints, designing web ui by re-using the company's React components, and creation of new components as well.",
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
                "One of the hand-picked students by the university to represent the school in the regional programming competition held on LPU Calamba Laguna. Solved programming problems mostly focusing on dynamic-algorithm problems.",
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
                "Compete with different schools with harder problem set, solving different problems mostly revolving in mathematics, dynamic programming, and mutli-dimensional arrays.",
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
                "In my free time, I sometimes spend my time solving CTF challenges which mostly were web exploitation. Most of the rooms I solved were vulnerabilities related to different injection techniques such as sqli, phpi, xss, etc.--others related to weak encryption such as AES-CBC, and some misconfiguration problems for the OG lfi and rfi.",
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
                "Compete with different IT and CS students in the college department. I represented our faction and won first place, solving most of the problems which revolved around dynamic programming problems.",
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
      <PageFiller heightFill="1vh" />
    </FlexBox>
  );
};

export default Experience;
