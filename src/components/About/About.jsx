import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from "../../assets/docs/termsAndCondition"

const Founder = () => (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={'8'}>
        <VStack>
            <Avatar src='https://res.cloudinary.com/drrl6fxgi/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1675254376/jpmceo34wpxpu87pikfe.jpg' boxSize={["40", "48"]} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
            <Heading children="Shantanu Waikar" size={['md', 'xl']} />
            <Text
                textAlign={['center', 'left']}
                children={`Hi, I am a full-stack developer and a teacher.
            Our mission is to provide quality content at resonable price.`} />
        </VStack>
    </Stack>
);

const VideoPlayer = () => (
    <Box>
        <video
            autoPlay
            loop
            muted
            controls
            controlsList='nodownload nofullscreen noremoteplayback'
            disableRemotePlayback
            disablePictureInPicture
            src="https://res.cloudinary.com/drrl6fxgi/video/upload/v1705938842/txv84o162d5hoe1ybzjm.mp4">
        </video>
    </Box>
)

const TandC = ({termsAndCondition})=>(
    <Box>
        <Heading size={'md'} children='Terms & Condition' textAlign={['center','left']} my='4'/>

        <Box h={'sm'} p='4' overflowY={'scroll'}>
            <Text fontFamily={'heading'} letterSpacing={'widest'} textAlign={['center','left']}>{termsAndCondition}</Text>
            <Heading my={'4'} size='xs' children='Refund only applicable for cancellation within 7 days.'/>
        </Box>
    </Box>
)

const About = () => {
    return (
        <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
            <Heading children="About Us" textAlign={["center", "left"]} />
            <Founder />
            <Stack m={'8'} direction={['column', 'row']} alignItems='center'>
                <Text fontFamily={'cursive'} m='8' textAlign={['center', 'left']}>
                    We are a video streaming platform with some premium courses available only for premium users.
                </Text>

                <Link to="/subscribe">
                    <Button variant={'ghost'} colorScheme='yellow'>
                        Checkout Our Plan
                    </Button>
                </Link>
            </Stack>

            <VideoPlayer />

            <TandC termsAndCondition={termsAndCondition}/>

            <HStack my={'4'} padding='4'>
                <RiSecurePaymentFill/>
                <Heading size={"xs"} fontFamily="sans-serif" textTransform={"uppercase"} children="Payment is secured by Razorpay"/>
            </HStack>
        </Container>
    )
}

export default About
