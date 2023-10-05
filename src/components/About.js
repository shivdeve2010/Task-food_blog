import React from 'react';
import { Image } from '@chakra-ui/react'
import pan from '../images/pan.png'
import bck from '../images/rectangle.png'
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


function About() {
    return (
        <ChakraProvider >
            <Box backgroundImage={bck}>
                
                    <Flex>

                    <Image src={pan} alt='pan' w={384} h={468} ml={205} mr={200}/>
                    
                    <Box>

                        <Text fontSize={45} fontFamily='Poppins' fontWeight='600' fontStyle='normal' color='#0E2368' mt={107}>
                            About Us
                        </Text>
                        <Text fontSize={15} fontFamily='Open Sans' fontWeight='400' fontStyle='normal' mt={27.41} pr={[204]}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolores maiores vitae itaque, adipisci earum obcaecati culpa placeat blanditiis odio deserunt enim reprehenderit? Quidem repudiandae atque aperiam! Ducimus modi, provident aspernatur, deleniti harum nisi neque corrupti tempore doloremque veniam velit aut ipsam rerum. Sed dolore consequatur maxime accusamus magni, odio, eum obcaecati explicabo similique optio quos repellat facilis ad? Deserunt!
                        </Text>
                        <Button colorScheme='red' pos="absolute" mt={21}  borderRadius='21px' w={132} h={42} padding={[3,26]}>Read More</Button>
                    </Box>
                    </Flex>
                
            </Box>
        </ChakraProvider>
    )

}
export default About