import React, { useState } from 'react';
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import grilled_tomato from '../images/grilled-tomatoes.png'
import vegie from '../images/vegi.png'
import meal from '../images/meal.png'
import how_to from '../images/how-to.png'
import meal_roll from '../images/meal-roll.png'
import meal_soup from '../images/meal-soup.png'


import { Center, Badge } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,


} from '@chakra-ui/react';

const handleClick1 = () => {
    return (


        <ChakraProvider>

            <Flex justifyContent="center">
                {/* 1 */}



                <Center h="100vh" p={41}>
                    <Box p="5" maxW="326px" borderWidth="1px" borderRadius={20.9}>
                        <Image borderRadius={21} src={grilled_tomato} />
                        <Flex align="baseline" mt={2}>

                            <Text

                                fontSize={21}
                                fontWeight={700}
                                color="#0E2368"
                                fontFamily=""

                                mt={35.51}
                            >
                                Grilled Tomatoes at Home
                            </Text>
                        </Flex>
                        <Text mt={7} fontSize={15} fontWeight={400} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repellat veritatis natus rerum modi ipsa.
                        </Text>

                        <Button colorScheme='black' variant='outline' borderRadius='21px' w={131} h={42} p={[3, 26]} mt={27.14} pl={43.17}>
                            Read More
                        </Button>
                    </Box>
                </Center>


                {/* 2 */}

                <Center h="100vh" p={41}>
                    <Box p="5" maxW="326px" borderWidth="1px" borderRadius={20.9}>
                        <Image borderRadius={21} src={vegie} />
                        <Flex align="baseline" mt={2}>

                            <Text

                                fontSize={21}
                                fontWeight={700}
                                color="#0E2368"
                                fontFamily=""

                                mt={35.51}
                            >
                                Snacks for Travel
                            </Text>
                        </Flex>
                        <Text mt={7} fontSize={15} fontWeight={400} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repellat veritatis natus rerum modi ipsa.
                        </Text>

                        <Button colorScheme='black' variant='outline' borderRadius='21px' w={131} h={42} p={[3, 26]} mt={27.14} pl={43.17}>
                            Read More
                        </Button>
                    </Box>
                </Center>




                {/* 3 */}


                <Center h="100vh" p={41}>
                    <Box p="5" maxW="326px" borderWidth="1px" borderRadius={20.9}>
                        <Image borderRadius={21} src={meal} />
                        <Flex align="baseline" mt={2}>

                            <Text

                                fontSize={21}
                                fontWeight={700}
                                color="#0E2368"
                                fontFamily=""

                                mt={35.51}
                            >
                                Post-workout Recipies
                            </Text>
                        </Flex>
                        <Text mt={7} fontSize={15} fontWeight={400} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repellat veritatis natus rerum modi ipsa.
                        </Text>

                        <Button colorScheme='black' variant='outline' borderRadius='21px' w={131} h={42} p={[3, 26]} mt={27.14} pl={43.17}>
                            Read More
                        </Button>
                    </Box>
                </Center>


            </Flex>

        </ChakraProvider>
    )
}
const handleClick2 = () => {
    return (


        <ChakraProvider>

            <Flex justifyContent="center">
                {/* 1 */}



                <Center h="100vh" p={41}>
                    <Box p="5" maxW="326px" borderWidth="1px" borderRadius={20.9}>
                        <Image borderRadius={21} src={how_to} />
                        <Flex align="baseline" mt={2}>

                            <Text

                                fontSize={21}
                                fontWeight={700}
                                color="#0E2368"
                                fontFamily=""

                                mt={35.51}
                            >
                                How to Grill Corn
                            </Text>
                        </Flex>
                        <Text mt={7} fontSize={15} fontWeight={400} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repellat veritatis natus rerum modi ipsa.
                        </Text>

                        <Button colorScheme='black' variant='outline' borderRadius='21px' w={131} h={42} p={[3, 26]} mt={27.14} pl={43.17}>
                            Read More
                        </Button>
                    </Box>
                </Center>


                {/* 2 */}

                <Center h="100vh" p={41}>
                    <Box p="5" maxW="326px" borderWidth="1px" borderRadius={20.9}>
                        <Image borderRadius={21} src={meal_roll} />
                        <Flex align="baseline" mt={2}>

                            <Text

                                fontSize={21}
                                fontWeight={700}
                                color="#0E2368"
                                fontFamily=""

                                mt={35.51}
                            >
                                Crunchwrap Supreme
                            </Text>
                        </Flex>
                        <Text mt={7} fontSize={15} fontWeight={400} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repellat veritatis natus rerum modi ipsa.
                        </Text>

                        <Button colorScheme='black' variant='outline' borderRadius='21px' w={131} h={42} p={[3, 26]} mt={27.14} pl={43.17}>
                            Read More
                        </Button>
                    </Box>
                </Center>




                {/* 3 */}


                <Center h="100vh" p={41}>
                    <Box p="5" maxW="326px" borderWidth="1px" borderRadius={20.9}>
                        <Image borderRadius={21} src={meal_soup} />
                        <Flex align="baseline" mt={2}>

                            <Text

                                fontSize={21}
                                fontWeight={700}
                                color="#0E2368"
                                fontFamily=""

                                mt={35.51}
                            >
                                Broccoli Cheese Soup
                            </Text>
                        </Flex>
                        <Text mt={7} fontSize={15} fontWeight={400} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repellat veritatis natus rerum modi ipsa.
                        </Text>

                        <Button colorScheme='black' variant='outline' borderRadius='21px' w={131} h={42} p={[3, 26]} mt={27.14} pl={43.17}>
                            Read More
                        </Button>
                    </Box>
                </Center>


            </Flex>

        </ChakraProvider>
    )
}

function Articles() {
    const [count, setCount] = useState(1);
    const [handle, setHandle] = useState(handleClick1());


    const handleminus = () => {
        count > 1 ?
            setCount(count - 1) : setCount(count);
        setHandle(handleClick1());
    }
    const handleplus = () => {
        count < 2 ?
            setCount(count + 1) : setCount(count);
        setHandle(handleClick2());
    }

    return (
        <div>
            <ChakraProvider>
                <Text fontSize={56} fontFamily='' fontWeight='600' color="#0E2368" fontStyle='normal' mt={158} ml={114} pr={[204]}>
                    Latest Articles
                </Text>
            {handle}


                <Box mb={65}>

                    <Button colorScheme='black' variant='outline' w={10} h={29} ml={663}
                        onClick={() => {
                            {
                                handleminus()

                            }
                        }}
                    ><ChevronLeftIcon /></Button>
                    {count}/2
                    <Button colorScheme='black' variant='outline' w={10} h={29}
                        onClick={() => {
                            {
                                handleplus()

                            }
                        }}
                    ><ChevronRightIcon /></Button>
                </Box>

            </ChakraProvider>


        </div>
    )

}
export default Articles