import { chakra } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <NextLink href='/' passHref>
      <chakra.a fontSize='2rem' fontWeight='700'>
        <Image src='/images/logo.png' alt='Logo' width={70} height={70} />
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
