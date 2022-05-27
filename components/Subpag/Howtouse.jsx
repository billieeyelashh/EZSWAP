import {Container, Stack, Text} from '@chakra-ui/react'
import * as React from 'react'

const Howtouse = () => {
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
        
        <Text color = 'white' align='center' fontWeight = 'bold' fontSize = '2xl'>How to use?</Text>
       
     
      </Stack>
      <Text color = 'grey'>
      This currently is only a placeholder so theres nothing to read. So here is a placeholder. Are there other words for placeholders.
      Ok think u get the point that this is indeed a placeholder.
      </Text>
      
    </Stack>
  </Container>
)
  
}


export default Howtouse