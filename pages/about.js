import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect} from "react";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

export default function about() {
 

  return (
    <Box bg='#0C1221' minH="100vh">
      <Header />

        <About />

      <Footer />
    </Box>
    
  );
}
