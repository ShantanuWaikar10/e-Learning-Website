import React from 'react'
import { Heading, Stack, VStack, Text, Button, Image, Box, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { CgGoogle, CgYoutube } from "react-icons/cg"
import { SiCoursera, SiUdemy } from "react-icons/si"
import { DiAws } from "react-icons/di"
import learning_gif from "../../assets/images/learning_gif.gif";
// import introVideo from '../../assets/videos/introVideo.mp4'

import vg from "../../assets/images/bg.jpg"
import "../Home/home.css"

const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <Stack
                    direction={["column", "row"]}
                    height="100%"
                    justifyContent={["center", "space-between"]}
                    alignItems="center"
                    spacing={["16", "56"]}
                >
                    <VStack width={"full"} alignItems={["center", "flex-end"]} spacing="8">
                        <Heading children="LEARN FROM THE EXPERTS" size={"2xl"} />
                        <Text fontSize={'2xl'} fontFamily="cursive" textAlign={["center", "left"]} children="Find Valuable Content At Resonable Price" />
                        <Link to="/courses">
                            <Button size={"lg"} colorScheme={"yellow"}>
                                Explore Now
                            </Button>
                        </Link>
                    </VStack>

                    <Image className='vector-graphics' 
                    boxSize={"md"} 
                    src={vg} 
                    objectFit="contain" />
                </Stack>
            </div>

            <Box padding={"8"} bg="blackAlpha.800">
                <Heading
                    textAlign={"center"}
                    fontFamily="body"
                    color={"yellow.400"}
                    children="OUR BRANDS"
                />
                <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop="4">
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>

            <div className="container2">
                <img src={learning_gif} alt="loading..." />
            </div>
        </section> 
    )
}

export default Home
