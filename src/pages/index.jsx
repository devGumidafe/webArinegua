import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import NextImage from 'next/image';

import { seo, data } from 'config';
import Slider from '@/components/slider';

const Home = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400');

  const isOdd = (num) => num % 2;

  const title = 'Home';
  const description = seo.description;

  const onChangeAudio = (e, itemTitle) => {
    const audio = document.getElementById(`audio-${itemTitle}`);
    audio.src = `/audios/${itemTitle}/${e.target.outerText}.mp3`;
    audio.play();
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: '350px',
              height: '350px',
              alt: 'avatar bigheads',
            },
          ],
        }}
      />

      <Box
        as='section'
        display='flex'
        alignItems='center'
        flexDir='column'
        textAlign='center'
        py='4'
      >
        <NextImage
          src='/bighead.svg'
          width='350'
          height='350'
          alt='avatar bigheads'
          placeholder='blur'
          blurDataURL='L5I~of#i004mgjw]-4XA00?wL#xu'
          priority
        />
        <Box>
          <Heading as='h1' fontSize='2xl' fontWeight='500' py='2'>
            Hi, I'm Arinegua Garcia{' '}
            <span role='img' aria-label='hand'>
              👋🏻
            </span>
          </Heading>
        </Box>
      </Box>

      <Box
        as='section'
        display='flex'
        alignItems='center'
        flexDir='column'
        textAlign='center'
        py='4'
      >
        <Slider></Slider>
      </Box>

      <Box
        as='section'
        display='flex'
        alignItems='center'
        flexDir='column'
        textAlign={{ base: 'center', lg: 'left' }}
        py='4'
      >
        {data.map((item, index) => (
          <Box
            display={{ lg: 'flex' }}
            justifyContent={{ lg: 'flex-start' }}
            alignItems={{ lg: 'flex-start' }}
            key={index}
            marginBottom='5'
            backgroundImage={`url(${item.image})`}
            backgroundSize='cover'
            backgroundPosition='top right'
            backgroundRepeat='no-repeat'
            boxShadow='lg'
            borderRadius='lg'
            w={{ base: '100%', lg: '100%' }}
            h={{ base: 'auto', lg: '500px' }}
            id={item.title}
          >
            <Box
              display='flex'
              flexDir='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              backgroundColor='whiteAlpha.500'
              color='black'
              borderRadius='lg'
              w={{ base: '100%', lg: '100%' }}
              h={{ base: 'auto', lg: '100%' }}
              p='5'
            >
              <Heading as='h1'>{item.title}</Heading>
              <Text>{item.author}</Text>
              <Box
                display='flex'
                flexDir='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                w='100%'
                h='100%'
                p='5'
              >
                <ul>
                  {item.audios.map((audio, index) => (
                    <li
                      onClick={(e) => onChangeAudio(e, item.title)}
                      key={index}
                      className='li-audio'
                    >
                      {audio}
                    </li>
                  ))}
                </ul>
              </Box>

              <audio
                src=''
                preload='none'
                controls
                id={`audio-${item.title}`}
              >
              </audio>
              
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
