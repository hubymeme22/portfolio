import { Box } from "@mui/material";
import { FullPageProps } from "../interfaces/props";

const FullPage: React.FC<FullPageProps> = ({
  id,
  children,
  alignItems,
  justifyContent,
  flexDirection,
  width,
  style,
}) => {
  return (
    <Box
      id={id}
      display={"flex"}
      flexDirection={flexDirection ?? "column"}
      boxSizing={"border-box"}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      style={style}
    >
      {children}
    </Box>
  );
};

export default FullPage;
