import {Box} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Howtouse from "../components/Subpag/Howtouse";

export default function howtouse() {
  

  return (
    <Box bg='#0C1221' minH="100vh">
      <Header />
      
        <Howtouse />
      
      <Footer />
    </Box>
    
  );
}