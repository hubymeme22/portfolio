import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageCarousel from "../ImageCarousel";
import { useContext, useState } from "react";
import { MinimalAccordionProps } from "../../interfaces/props";
import MobileExperience from "../../contexts/MobileExperience";

const MinimalAccordion: React.FC<MinimalAccordionProps> = ({
  imageSlide,
  subtitle,
  textContent,
  content,
  style,
  title,
}) => {
  const mobileExperience = useContext(MobileExperience);
  const [images, _] = useState(imageSlide ?? []);

  return (
    <Box style={style}>
      <Accordion
        square
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          borderTop: "1px solid var(--secondary-accordion-border-light)",
          borderBottom: "1px solid var(--secondary-accordion-border-light)",
          width: mobileExperience ? "100%" : "31.5vw",
        }}
      >
        {/* Title and subtitle */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              {title}
            </Typography>
            <Typography
              variant="caption"
              color="var(--secondary-accordion-border-light)"
            >
              {subtitle}
            </Typography>
          </Box>
        </AccordionSummary>

        {/* Images, Contents, and Text contents */}
        <AccordionDetails
          sx={{
            paddingTop: "10px",
            borderTop: "1px solid var(--secondary-accordion-border-light)",
          }}
        >
          {images.length > 0 ? (
            <Box
              height="15em"
              width="98%"
              margin="auto"
              marginTop="1em"
              marginBottom="1em"
            >
              <ImageCarousel images={images} />
            </Box>
          ) : (
            <></>
          )}

          {/* Text Content */}
          <Box width="100%" textAlign="justify" paddingBottom="10px">
            <Typography color="var(--secondary-accordion-border-light)">
              {textContent}
            </Typography>
          </Box>

          {/* Additional Contents */}
          <Box width="100%">{content}</Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MinimalAccordion;
