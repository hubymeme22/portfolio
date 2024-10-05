import { Button } from "@mui/material";
import { NextButtonProps } from "../../interfaces/props";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext } from "react";
import MobileExperience from "../../contexts/MobileExperience";

const NextButton: React.FC<NextButtonProps> = ({ onClick, hidden }) => {
  const mobileExperience = useContext(MobileExperience);

  return !hidden ? (
    <Button
      style={{ animation: "fadeInFromLeft 2s forwards" }}
      sx={{
        bgcolor: "var(--direction-button)",
        position: "fixed",
        bottom: "4em",
        right: mobileExperience ? "1em" : "3em",
        borderRadius: "10px",
        padding: "1em",
        color: "white",
        zIndex: 2,
        ":hover": {
          bgcolor: "var(--secondary-light)",
        },
      }}
      endIcon={<ArrowForwardIosIcon />}
      onClick={onClick}
    />
  ) : (
    <></>
  );
};

export default NextButton;
