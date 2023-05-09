import { useState, useEffect } from "react";
import { ChakraProvider, extendTheme, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Hydrate } from "react-query/hydration";
import { QueryClient, QueryClientProvider } from "react-query";
import dynamic from "next/dynamic";
import React from "react";
import Header from "../component/Header";
import ASidebar from "../component/Aside";

const theme = extendTheme({
  breakpoints: {
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

const DynamicBrowserRouter = dynamic(
  () => import("react-router-dom").then((mod) => mod.BrowserRouter),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  const [isLargerThanMd, setIsLargerThanMd] = useState(false);
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  const router = useRouter();
  const queryClient = new QueryClient();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargerThanMd(window.innerWidth >= parseInt(theme.breakpoints.md));

      const handleResize = () => {
        setIsLargerThanMd(window.innerWidth >= parseInt(theme.breakpoints.md));
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [theme.breakpoints.md]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setColorMode(prefersDark ? "dark" : "light");
    }
  }, []);

  const chakraTheme = extendTheme({
    colors: {
      brand: {
        500: "#000000",
        300: "#FFFFFF",
      },
    },
    config: {
      initialColorMode: colorMode,
    },
    fonts: {
      heading: "Noto Sans KR, sans-serif",
      body: "Noto Sans KR, sans-serif",
    },
  });

  const Render = router.pathname !== "/";

  return (
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <DynamicBrowserRouter>
            {Render && <Header />}
            <Component {...pageProps} />
          </DynamicBrowserRouter>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
