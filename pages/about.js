import {Box} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/Subpag/About";

export default function about() {
 

  return (
    <Box bg='#0C1221' minH="100vh">
      <Header />

        <About />

      <Footer />
    </Box>
    
  );
}
