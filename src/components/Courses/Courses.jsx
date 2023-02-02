import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({ views, title, imageSrc, id, addToPlatlistHandler, creator, description, lectureCount, }) => {
    return (
        <VStack className='course' alignItems={["center", "flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading
                textAlign={["center", "left"]}
                maxW="200px"
                size={"sm"}
                fontFamily={"sans-serif"}
                noOfLines={3}
                children={title} />

            <Text noOfLines={2} children={description} />

            <HStack>
                <Text fontWeight={"bold"} textTransform="uppercase" children={"Creator"} />
                <Text fontFamily={"body"} textTransform="uppercase" children={creator} />
            </HStack>

            <Heading 
            textAlign={"center"} 
            size="xs" 
            children={`Lectures - ${lectureCount}`} 
            textTransform="uppercase"
            />

            <Heading 
            size="xs" 
            children={`Views - ${views}`} 
            textTransform="uppercase"
            />

            <Stack direction={["column", "row"]} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={"yellow"}>Watch Now</Button>
                </Link>
                <Button variant={"ghost"} colorScheme={"yellow"} onClick={()=>addToPlatlistHandler(id)}>Add to playlist</Button>
            </Stack>

        </VStack>
    )
}

const Courses = () => {

    const [keyword, setKeyword] = useState("")
    const [category, setCategory] = useState("")

    const addToPlatlistHandler = () => {
        console.log("Added to playlist");
    }

    const catagories = [
        "Web development",
        "Artificial Intellegence",
        "Data Structure and Algorithm",
        "App Development",
        "Data Science",
        "Game Development"
    ]

    return (
        <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
            <Heading children="All Courses" margin={"8"} />
            <Input
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Search a Course..."
                type={'text'}
                focusBorderColor="yellow.500"
            />

            <HStack overflowX={"auto"} paddingY="8" css={{
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>
                {
                    catagories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>

            <Stack
                direction={["column", "row"]}
                flexWrap="wrap"
                justifyContent={["flex-start", "space-evenly"]}
                alignItems={["center", "flex-start"]}
            >

                <Course
                    title={"sample"}
                    description={"sample"}
                    views={23}
                    imageSrc={"https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60"}
                    id={"sample"}
                    creator={"sample boy"}
                    lectureCount={2}
                    addToPlatlistHandler={addToPlatlistHandler}
                />
            </Stack>
        </Container>
    )
}

export default Courses