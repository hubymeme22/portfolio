import { Box } from "@mui/material";
import MenuButton from "../components/Buttons/MenuButton";
import Portfolio from "./Portfolio";
import Header from "./templates/Header";
import { useEffect, useState } from "react";

const PAGE_LAST = 2;
const PAGES_WITH_SCROLL_DISABLED = [2, 3];

const Layout: React.FC = () => {
  const [page, setPage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);

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
      <Header page={page} setPage={setPage} />
      <Portfolio
        page={page}
        scrollDisabled={checkScrollDisabled()}
        setPage={setPage}
      />
      <footer>
        <Box
          width="96%"
          paddingTop="0.5em"
          paddingBottom="0.5em"
          borderTop="1px solid var(--secondary-light)"
          display="flex"
          justifyContent="space-between"
        >
          <Box sx={{ fontSize: "11pt" }}>
            HueHueberry © 2024 | Coded with raw React+TS
          </Box>
          <Box display="flex" gap="2em" justifyContent="flex-end">
            <MenuButton
              to="https://linkedin.com/in/huehueberry/"
              label="LinkedIn"
              style={{ fontSize: "11pt" }}
            />
            <MenuButton
              to="https://www.facebook.com/hubert.espinola.10"
              label="Facebook"
              style={{ fontSize: "11pt" }}
            />
            <MenuButton
              to="https://x.com/thekrazyuno"
              label="Twitter (X)"
              style={{ fontSize: "11pt" }}
            />
            <MenuButton
              to="https://www.instagram.com/huehueberry/"
              label="Instagram"
              style={{ fontSize: "11pt" }}
            />
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default Layout;
