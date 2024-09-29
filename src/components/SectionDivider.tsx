import { Box } from "@mui/material";
import { SectionDividerProps } from "../interfaces/props";

const SectionDivider: React.FC<SectionDividerProps> = ({ text, width }) => {
  return (
    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
      <div className="divider" style={{ width }}>
        <hr />
        <span className="divider-text">{text}</span>
        <hr />
      </div>
    </Box>
  );
};

export default SectionDivider;
