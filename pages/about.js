import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

export default function about() {
  const { colorMode } = useColorMode();
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Box bg={colorMode == "light" ? "#0C1221" : "gray.500"} minH="100vh">
      <Header />

        <About />

      <Footer />
    </Box>
    
  );
}
