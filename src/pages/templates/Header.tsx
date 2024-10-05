import { Box, Typography } from "@mui/material";
import MenuButton from "../../components/Buttons/MenuButton";
import { HeaderProps } from "../../interfaces/props";
import ThemeToggle from "../../components/Buttons/ThemeToggle";
import { useContext } from "react";
import MobileExperience from "../../contexts/MobileExperience";
import FlexBox from "../../components/FlexBox";

const Header: React.FC<HeaderProps> = ({ page, setPage }) => {
  const mobileExperience = useContext(MobileExperience);

  return (
    <header
      style={
        !mobileExperience
          ? undefined
          : {
              gridTemplateColumns: "auto",
              display: "flex",
            }
      }
    >
      {!mobileExperience && (
        <>
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
        </>
      )}
      {mobileExperience && (
        <FlexBox width="100%" justifyContent="space-around" flexDirection="row">
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
        </FlexBox>
      )}
    </header>
  );
};

export default Header;
