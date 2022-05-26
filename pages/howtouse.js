import {Box} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Howtouse from "../components/Howtouse";

export default function howtouse() {
  

  return (
    <Box bg='#0C1221' minH="100vh">
      <Header />
      
        <Howtouse />
      
      <Footer />
    </Box>
    
  );
}