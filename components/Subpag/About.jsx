import {Container, Stack, Text} from '@chakra-ui/react'
import * as React from 'react'

const About = () => {
  return (
    <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >

      <Stack justify="space-between" direction="row" align="center">
        
        <Text color = 'white' align='center' fontWeight = 'bold' fontSize = '2xl'>About</Text>
       
     
      </Stack>

      <Text color = 'grey'>
      Ezswap aims to be an easy to use Crosschain DEX developed by the
      EzBlock Organisation. Unfournately that is currently only me lol. But feel
      free to contact me if you want to help out or take a look at the repo.
      Currently almost zero fee crosschain swaps are possible between Avalance, Binance, Polygon and Ethereum.
      </Text>

      <Text color = 'white'  fontWeight = 'bold' fontSize = 'xl'>That is cool but what is currently worked on </Text>

      <Text color = 'grey'>
      Currently I am working on the Avalanche and Solana compatibility.
      Also improving the UI and refactoring some code.  
      </Text>
      
      <Text color = 'white'  fontWeight = 'bold' fontSize = 'xl'>Motivation 
      </Text>
      
      <Text color = 'grey'>
          A lot of modern Software suffers from severe over-engineering. 
          Ezswap tries to bring only the features users really need.
          These texts are not final and at the moment almost only serve as placeholders
          with some info here and there.
      </Text>


      

    </Stack>
  </Container>
)
  
}

export default About
