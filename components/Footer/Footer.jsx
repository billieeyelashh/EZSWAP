import {Button, ButtonGroup, Container, IconButton, Stack, Text, Center} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'


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
        
        <ButtonGroup variant="ghost" color = 'grey' >
         
          <IconButton as="a" href="https://github.com/" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />}  _hover={{ bg: '#F04E23' }}/>
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
            _hover={{ bg: '#F04E23' }}
          />
            <Link href="/howtouse">
           <Button variant="link" fontSize ="sm" color = "subtle">How to use</Button>
              </Link>
            <Link href="/about">
            <Button variant="link" fontSize ="sm" color = "subtle">About</Button>
                </Link>
        </ButtonGroup>
        <Text fontSize="sm" color="grey">
        &copy; {new Date().getFullYear()} EZSWAP build with ❤️
      </Text>
     
      </Stack>
    
      
    </Stack>
  </Container>
)
  
}

export default Footer
