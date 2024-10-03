import { Box, Typography } from "@mui/material";
import MenuButton from "../../components/Buttons/MenuButton";
import { HeaderProps } from "../../interfaces/props";
import ThemeToggle from "../../components/Buttons/ThemeToggle";

const Header: React.FC<HeaderProps> = ({ page, setPage }) => {
  return (
    <header>
      <Box display={"flex"} alignItems={"center"}>
        <Typography>Hubert Espinola</Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={"85% 15%"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="2em"
        >
          <MenuButton
            active={page === 1}
            label="About"
            onClick={() => setPage(1)}
          />
          <MenuButton
            active={page === 2}
            label="Experience"
            onClick={() => setPage(2)}
          />
          <MenuButton
            active={page === 3}
            label="Projects"
            onClick={() => setPage(3)}
          />
          <MenuButton
            active={page === 4}
            label="Contact me"
            onClick={() => setPage(4)}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="2em"
        >
          <ThemeToggle darkMode={false} onToggle={() => {}} />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
