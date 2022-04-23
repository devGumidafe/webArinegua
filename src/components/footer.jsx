import { Box, Button, Icon, Link as ChakraLink, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from 'react-icons/fa';

import { MAX_WIDTH } from 'config';

const Footer = () => {
  return (
    <Box as='footer'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        textAlign='center'
        minH='4rem'
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx='auto'
      >
        <Box py='2'>
          <Text>
            Footer{' '}
            <span role='img' aria-label='red heart'>
              ❤️
            </span>{' '}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
