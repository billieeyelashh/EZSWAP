import {Button, ButtonGroup, Container, IconButton, Stack, Text, Center} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'


const Footer = () => {
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
        
        <ButtonGroup variant="ghost" >
         
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />}  _hover={{ bg: '#F04E23' }}/>
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
            _hover={{ bg: '#F04E23' }}
          />
          
           <Button variant="link" fontSize ="sm" color = "subtle">How to use</Button>
            <Button variant="link" fontSize ="sm" color = "subtle">About</Button>
        </ButtonGroup>
        <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} EZSWAP build with ❤️
      </Text>
     
      </Stack>
    
      
    </Stack>
  </Container>
)
  
}

export default Footer