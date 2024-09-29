import { Box } from "@mui/material";
import { FlexBoxProps } from "../interfaces/props";

const FlexBox: React.FC<FlexBoxProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      {props.children}
    </Box>
  );
};

export default FlexBox;
