import React from 'react';
import { Image } from '@chakra-ui/react'
import pizza from '../images/pizza.png'
import vector from '../images/Vector 1.png'
import logo from '../images/logo.png'
import { Flex, Spacer } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './home.css'

import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,


} from '@chakra-ui/react';


function Home() {
    return (
        <ChakraProvider >

            <Image src={logo} alt='logo' w={107} h={83} mt={33} ml={100} pos="absolute" />
            <Button colorScheme='whiteAlpha' variant='outline' zIndex='2' mt={35} ml={1289} mr={52.5} mb={768} borderRadius='21px' w={122} h={42} p={[3, 26]} pos="absolute">
                Get In Touch
            </Button>
            <Flex>


                <Text fontSize={62} fontFamily='' fontWeight='700' fontStyle='normal' color='#0E2368' mt={227} ml={100} mr={995} mb={370}>
                    Discover the<br />
                    <span id='best'>Best</span> Food <br />
                    and Drinks
                </Text>
                <Text fontSize={16.445} fontFamily='Open Sans' fontWeight='400' fontStyle='normal' mt={550} ml={100} mr={995} mb={288} pos="absolute">
                    Naturally made Healthcare Products for the <br />better care & support of your body.
                </Text>
                <Button colorScheme='red' pos="absolute" mt={630} ml={97} mr={1153} mb={184} borderRadius='34px' w={190} h={63} p={[4, 9]}>Explore Now!</Button>



                <Spacer />

                <Box pos="absolute" top="0" right="0">
                    <Image src={pizza} alt='pizza' w={735} h={804} />
                    <Image src={vector} alt='vector' w={752} h={839} pos="absolute" top="0" right="0" />
                </Box>
            </Flex>
        </ChakraProvider>
    );

}
export default Home;

