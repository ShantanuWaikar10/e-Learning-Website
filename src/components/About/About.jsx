import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import introVideo from '../../assets/videos/introVideo.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from "../../assets/docs/termsAndCondition"

const Founder = () => (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={'8'}>
        <VStack>
            <Avatar src='https://media.licdn.com/dms/image/C4D03AQFCsVVoEt33GA/profile-displayphoto-shrink_800_800/0/1627226325121?e=1678924800&v=beta&t=snkiUZ1xV0PzuohD9bFH25oV-aoC2eFMbbEbXZpaBbU' boxSize={["40", "48"]} />
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
            src={introVideo}>
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