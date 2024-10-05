import { Button } from "@mui/material";
import { NextButtonProps } from "../../interfaces/props";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import MobileExperience from "../../contexts/MobileExperience";
import { useContext } from "react";

const PrevButton: React.FC<NextButtonProps> = ({ onClick, hidden }) => {
  const mobileExperience = useContext(MobileExperience);

  return !hidden ? (
    <Button
      hidden={hidden}
      style={{ animation: "fadeInFromRight 2s forwards" }}
      sx={{
        bgcolor: "var(--direction-button)",
        position: "fixed",
        bottom: "4em",
        left: mobileExperience ? "1em" : "3em",
        borderRadius: "10px",
        padding: "1em",
        color: "white",
        zIndex: 2,
        ":hover": {
          bgcolor: "var(--secondary-light)",
        },
      }}
      endIcon={<ArrowBackIos />}
      onClick={onClick}
    />
  ) : (
    <></>
  );
};

export default PrevButton;
