import { Box } from "@mui/material";
import { ChipProps } from "../../interfaces/props";

const Chip: React.FC<ChipProps> = ({ bgcolor, color, label }) => {
  return (
    <Box
      component="span"
      width="auto"
      height="auto"
      borderRadius="10px"
      bgcolor={bgcolor}
      color={color}
      textAlign="center"
      padding="5px 10px"
      fontSize="10pt"
      fontWeight="bold"
      boxShadow="0px 2px 0px 2px var(--shadow-light)"
    >
      {label}
    </Box>
  );
};

export default Chip;
