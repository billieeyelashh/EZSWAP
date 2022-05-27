import { Box, Button, Spacer, Text, useColorMode } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { FaSignOutAlt as LogoutIcon } from "react-icons/fa";
import Link from 'next/link'


const Header = () => {
  const { colorMode } = useColorMode();
  const { user, authenticate, isWeb3Enabled, logout, isLoggingOut } =
    useMoralis();

  return (
    <Box
      p={4}
      display="flex"
      flexDir={["column", "row"]}
      alignItems="center"
    >
      <Link href={`/`}>
      <Button fontSize="4xl" color = '#FDB813' fontWeight = '1000' bg = '#0C1221'  _hover={{ bg: '#0C1221' }}>EZSWAP</Button>
      </Link>
      <Spacer />
      
      <Box display="flex" mt={["4", "0"]}>
        {user?.id ? (
          <Button
            onClick={logout}
            rightIcon={<LogoutIcon />}
            isLoading={isLoggingOut}
          >
            {user.id}
          </Button>
        ) : (
          <Button fontWeight= '700' bg = '#e85154' color = 'white'  _hover={{ bg: '#F04E23' }} onClick={authenticate}>Connect Wallet</Button>
        )}
        <Box mr={2}>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Header;