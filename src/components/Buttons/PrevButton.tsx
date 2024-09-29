import { Button } from "@mui/material";
import { NextButtonProps } from "../../interfaces/props";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

const PrevButton: React.FC<NextButtonProps> = ({ onClick, hidden }) => {
  return !hidden ? (
    <Button
      hidden={hidden}
      style={{ animation: "fadeInFromRight 2s forwards" }}
      sx={{
        bgcolor: "var(--shadow-light)",
        position: "absolute",
        bottom: "4em",
        left: "3em",
        borderRadius: "10px",
        padding: "1em",
        color: "white",
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
