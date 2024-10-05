import { Box } from "@mui/material";
import MenuButton from "../../components/Buttons/MenuButton";
import { useContext } from "react";
import MobileExperience from "../../contexts/MobileExperience";

const Footer: React.FC = () => {
  const mobileExperience = useContext(MobileExperience);

  return (
    <footer>
      <Box
        width="96%"
        paddingTop="0.5em"
        paddingBottom="0.5em"
        borderTop="1px solid var(--secondary-light)"
        display="flex"
        justifyContent="space-between"
      >
        {!mobileExperience && (
          <Box sx={{ fontSize: "11pt" }}>
            HueHueberry © 2024 | Coded with huehueberistic design 👽
          </Box>
        )}
        <Box display="flex" gap="2em" justifyContent="flex-end">
          <MenuButton
            to="https://linkedin.com/in/huehueberry/"
            label="LinkedIn"
            style={{ fontSize: "11pt" }}
          />
          <MenuButton
            to="https://www.facebook.com/hubert.espinola.10"
            label="Facebook"
            style={{ fontSize: "11pt" }}
          />
          <MenuButton
            to="https://x.com/thekrazyuno"
            label="Twitter"
            style={{ fontSize: "11pt" }}
          />
          <MenuButton
            to="https://www.instagram.com/huehueberry/"
            label="Instagram"
            style={{ fontSize: "11pt" }}
          />
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
