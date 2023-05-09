import { ReactNode, useEffect, useState } from "react";
import Navigationbar from "./NavigationBar";
import MobileFooter from "./mobilefooter";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "./NavigationBar";
import Aside from "./Aside";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowWidth]);

  const isMobile = windowWidth < 768;
  const isPC = windowWidth > 768;
  return (
    <>
      <Grid templateColumns={{ base: "none", md: "220px 1fr" }} gap={6}>
        <GridItem>
          <Aside />
        </GridItem>
        <GridItem>
          <Grid templateRows="auto 1fr" gap={{ base: "50px", md: "100px" }}>
            <GridItem>
              <NavigationBar />
            </GridItem>
            <GridItem>
              <ul style={{ listStyle: "none" }}>{children}</ul>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>

      {isMobile && <MobileFooter />}
    </>
  );
};

export default Layout;
