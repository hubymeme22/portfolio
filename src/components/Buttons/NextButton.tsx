import { Button } from "@mui/material";
import { NextButtonProps } from "../../interfaces/props";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NextButton: React.FC<NextButtonProps> = ({ onClick, hidden }) => {
  return !hidden ? (
    <Button
      style={{ animation: "fadeInFromLeft 2s forwards" }}
      sx={{
        bgcolor: "var(--shadow-light)",
        position: "absolute",
        bottom: "4em",
        right: "3em",
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
