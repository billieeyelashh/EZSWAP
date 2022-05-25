import { Button, Fade } from "@chakra-ui/react";
import { useOneInchSwap } from "react-moralis";

const SwapButton = ({
  fromToken,
  fromAmount,
  toToken,
  toAmount,
  selectedChain,
}) => {
  const { swap, data, error } = useOneInchSwap({
    chain: selectedChain,
    fromToken: fromToken,
    toToken: toToken,
    fromAmount: fromAmount,
    slippage: 1,
  });

  console.log(data);
  console.log(error);

  return (
    <Fade in={fromToken && fromAmount && toToken}>
      <Button
        fontWeight= '700' bg = '#e85154' color = 'white'  _hover={{ bg: '#F04E23' }}
        onClick={swap}
        mt={toToken && toAmount ? "2" : "6"}
        isFullWidth={true}
      >
        Swap
      </Button>
    </Fade>
  );
};

export default SwapButton;
