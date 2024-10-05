import { Box, useMediaQuery } from "@mui/material";
import Portfolio from "./Portfolio";
import Header from "./templates/Header";
import { useEffect, useState } from "react";
import PageInstruct from "../components/Texts/PageInstruct";
import Footer from "./templates/Footer";
import MobileExperience from "../contexts/MobileExperience";

const PAGE_LAST = 2;
const PAGES_WITH_SCROLL_DISABLED = [2, 3];

const Layout: React.FC = () => {
  const [page, setPage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const desktopMedia = useMediaQuery("(min-width:1468px)");

  const checkScrollDisabled = () => {
    return desktopMedia ? PAGES_WITH_SCROLL_DISABLED.includes(page) : true;
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
    <MobileExperience.Provider value={!desktopMedia}>
      <Box height="calc(100% - 2em)" width="100%" top="0" left="0">
        <Header page={page} setPage={setPage} />
        <PageInstruct
          hidden={page !== 0 || !desktopMedia}
          text="[ Scroll me ]"
        />
        <Portfolio
          page={page}
          scrollDisabled={checkScrollDisabled()}
          setPage={setPage}
        />
        <Footer />
      </Box>
    </MobileExperience.Provider>
  );
};

export default Layout;
