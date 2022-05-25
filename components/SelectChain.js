// components
import { Box, Icon, Text, useColorMode } from "@chakra-ui/react";

// assets
import ETHLogo from "../assets/svgs/ETHLogo";
import BSCLogo from "../assets/svgs/BSCLogo";
import PolygonLogo from "../assets/svgs/PolygonLogo";
import AvaxLogo from "../assets/svgs/AvaxLogo";



const chains = [
  { value: "eth", name: "ETH", logo: ETHLogo },
  { value: "bsc", name: "BSC", logo: BSCLogo },
  { value: "polygon", name: "POL", logo: PolygonLogo },
  { value: "avax", name: "AVAX", logo: AvaxLogo },
  

];

const SelectChain = ({ selectedChain, setSelectedChain }) => {
  const { colorMode } = useColorMode();

  return (
    <Box display="flex" flexDir="column" alignItems="flex-start" marginTop ='30px'>
     
      <Box display="flex">
        {chains.map((chain) => (
          <Box
            key={chain.value}
            bg={
              selectedChain == chain.value
                ? colorMode == "light"
                  ? "#495269"
                  : "gray.600"
                : "transparent"
            }
            p={2}
            borderRadius={6}
            display="flex"
            onClick={() => setSelectedChain(chain.value)}
            cursor="pointer"
            mr="6"
            transition="background-color 200ms linear"
          >
            <Icon as={chain.logo} />
            <Text color = 'white' ml="2" fontWeight= '700'>{chain.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SelectChain;
