import { Box } from "@mui/material";
import { PageFillerProps } from "../interfaces/props";

const PageFiller: React.FC<PageFillerProps> = ({ heightFill }) => {
  return <Box height={heightFill} width={"100%"} />;
};

export default PageFiller;
