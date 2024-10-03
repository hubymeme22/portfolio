import { Typography } from "@mui/material";
import FlexBox from "../../components/FlexBox";

const ContactMe: React.FC = () => {
  return (
    <FlexBox
      height="100%"
      justifyContent="center"
      style={{ animation: "fadeIn 1s forwards" }}
    >
      <Typography
        textAlign="center"
        fontWeight="bold"
        variant="h3"
        fontFamily="Roboto Condensed"
      >
        Under Development ^^
      </Typography>
    </FlexBox>
  );
};

export default ContactMe;
