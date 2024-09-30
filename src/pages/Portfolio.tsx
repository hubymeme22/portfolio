import { Box } from "@mui/material";
import Landing from "./PortfolioSections/Landing";
import NextButton from "../components/Buttons/NextButton";
import PrevButton from "../components/Buttons/PrevButton";
import About from "./PortfolioSections/About";
import { PortfolioProps } from "../interfaces/props";
import Experience from "./PortfolioSections/Experience";
import Projects from "./PortfolioSections/Projects";

const Portfolio: React.FC<PortfolioProps> = ({
  page,
  scrollDisabled,
  setPage,
}) => {
  return (
    <Box
      width="100%"
      height="90vh"
      overflow="auto"
      sx={{ scrollbarWidth: "thin" }}
    >
      <NextButton
        hidden={!scrollDisabled}
        label="Next"
        onClick={() => setPage(page + 1)}
      />
      <PrevButton
        hidden={!scrollDisabled}
        label="Prev"
        onClick={() => setPage(page - 1)}
      />
      {page === 0 && <Landing />}
      {page === 1 && <About />}
      {page === 2 && <Experience />}
      {page === 3 && <Projects />}
    </Box>
  );
};

export default Portfolio;
