import React from 'react';
import { Image } from '@chakra-ui/react'
import logo from '../images/logo.png'
import bck from '../images/Footerrec.png'
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import twit from '../images/twit.png'
import { Flex, Spacer } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,


} from '@chakra-ui/react';


function Footer() {
    return (
        <ChakraProvider >
            <Box backgroundImage={bck}>
                <Flex justifyContent="center">
                    <Box mr={211} mt={123} ml={104}>
                        <Image src={logo} w={161} h={125} />
                    </Box>

                    <Box p={10}>
                        <Text fontSize={18.843} fontFamily='Poppins' fontWeight='600' fontStyle='normal' color='#0E2368'
                            mr={206} mt={84}
                        >
                            Contact Us
                        </Text>
                        <Text mt={14}>
                            Lorem Ipsum Pvt Ltd.5/1, Magalton <br />Road, Phartosh Gate near YTM <br />Market, XYZ-343434
                        </Text>
                        <Text mb={15} mt={15}>
                            example2020@gmail.com
                        </Text>
                        <Text>
                            (904) 443-0343
                        </Text>
                    </Box>
                    <Box p={10}>
                        <Text fontSize={18.843} fontFamily='Poppins' fontWeight='600' fontStyle='normal' color='#0E2368'
                            mt={84}
                        >
                            More
                        </Text>
                        <Text mt={14}>
                            About Us
                        </Text>
                        <Text mt={14}>
                            Product
                        </Text>
                        <Text mt={14}>
                            Career
                        </Text>
                        <Text mt={14}>
                            Contact Us
                        </Text>
                    </Box>
                    <Box p={10}>
                        <Text fontSize={18.843} fontFamily='Poppins' fontWeight='600' fontStyle='normal' color='#0E2368'
                            mt={84}
                        >
                            Social Links
                        </Text>
                        <Flex justifyContent="center" mt={14} >
                            <Image src={insta} w={21} h={21} mr={22} />
                            <Image src={twit} w={21} h={21} mr={22} />
                            <Image src={fb} w={21} h={21} />
                        </Flex>
                    </Box>


                </Flex>
            </Box>
        </ChakraProvider>
    )

}
export default Footer