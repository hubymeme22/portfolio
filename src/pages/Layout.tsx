import { Box, useMediaQuery } from "@mui/material";
import Portfolio from "./Portfolio";
import Header from "./templates/Header";
import { useEffect, useState } from "react";
import PageInstruct from "../components/Texts/PageInstruct";
import Footer from "./templates/Footer";
import BigHeaderSubtitle from "../components/Texts/BigHeaderSubtitle";
import FlexBox from "../components/FlexBox";

const PAGE_LAST = 2;
const PAGES_WITH_SCROLL_DISABLED = [2, 3];

const Layout: React.FC = () => {
  const [page, setPage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const desktopMedia = useMediaQuery("(min-width:1468px)");

  const checkScrollDisabled = () => {
    return PAGES_WITH_SCROLL_DISABLED.includes(page);
  };

  const directionCheck = (ev: WheelEvent) => {
    if (ev.deltaY > 0) setScrollDirection(1);
    if (ev.deltaY < 0) setScrollDirection(-1);

    setTimeout(() => {
      setScrollDirection(0);
    }, 1000);
  };

  useEffect(() => {
    addEventListener("wheel", directionCheck);
    return () => {
      removeEventListener("wheel", directionCheck);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection > 0 && page < PAGE_LAST && !checkScrollDisabled())
      setPage(page + 1);
    if (scrollDirection < 0 && page > 0 && !checkScrollDisabled())
      setPage(page - 1);
  }, [scrollDirection]);

  return (
    <Box
      sx={{
        height: "calc(100% - 2em)",
        width: "100%",
        top: 0,
        left: 0,
      }}
    >
      {desktopMedia ? (
        <>
          <Header page={page} setPage={setPage} />
          <PageInstruct
            hidden={page !== 0}
            text="[ << Scroll me to change page >> ]"
          />
          <Portfolio
            page={page}
            scrollDisabled={checkScrollDisabled()}
            setPage={setPage}
          />
        </>
      ) : (
        <FlexBox
          height="100vh"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <BigHeaderSubtitle label="Mobile experience is currently not supported :((" />
        </FlexBox>
      )}
      <Footer />
    </Box>
  );
};

export default Layout;
