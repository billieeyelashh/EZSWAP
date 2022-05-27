import { ChakraProvider } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MoralisProvider
        serverUrl = 'https://bixbts8jbabb.usemoralis.com:2053/server'
        appId = 'g0PEfKfloCptXmtuFB6WlGC77r3HxxyYN6t7DNCH'
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
