import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti'

const Footer = () => {
    return (
        <Box padding={"4"} bg="blackAlpha.900" minH={"10vh"}>
            <Stack direction={["column", "row"]}>
                <VStack alignItems={["center", "flex-start"]} width="full">
                    <Heading children="All Rights Reserved" color={"white"} />
                    <Heading fontFamily={"body"} size="sm" children="@Shantanu Waikar" color={"yellow.400"} />
                </VStack>
                <HStack spacing={["2", "10"]} justifyContent="center"
                    color={"white"}
                    fontSize="50"
                >
                    <a href="https://www.linkedin.com/in/shantanu-waikar-953653213/" target={'blank'}>
                        <TiSocialLinkedinCircular />
                    </a>
                    <a href="https://twitter.com/shantanuw1" target={'blank'}>
                        <TiSocialTwitterCircular />
                    </a>
                    <a href="https://github.com/ShantanuWaikar10" target={'blank'}>
                        <TiSocialGithubCircular />
                    </a>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer