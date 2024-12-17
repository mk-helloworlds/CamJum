import {Box, Button, Flex, Text, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import heroVideo from '../../../assets/hero.mp4'

const HomeHero = () => {
    const navigator = useNavigate();
    return (
        <Flex
            minH="100vh"
            w="100vw"
            px={["24px", "24px", "110px"]}
            alignItems="center"
            justifyContent="center"
            gap='5'
            direction={['column']}
            id="home-hero"
            pos="relative"
            bg="black"
        >
            <video
                src={heroVideo}
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: '0.5'
                }}
            ></video>
            <VStack
                align="center"
                textAlign={['center', 'center', 'center', 'start']}
                pos="relative"
            >
                <Text
                    fontSize={['2rem', '3rem', '3rem']}
                    fontWeight="bold"
                    color="white"
                >
                    Fly with CamJum
                </Text>
                <Text
                    fontSize={["1em", "1.5em", "1.5em"]}
                    lineHeight={[1.5, 1.5, 10]}
                    px={['0', '0', '0', "15rem"]}
                    textAlign="center"
                    color="white"
                >
                    Effortless booking from Korea to Cambodia. Quick, adaptable, and always direct.
                </Text>
                <Box h="0.5rem"/>
                <Button
                    colorScheme='red'
                    fontSize={["1em", "1.5em", "1.5em"]}
                    size="lg"
                    onClick={() => {
                        window.scroll(0, 0);
                        navigator('about');
                    }}
                >
                    Learn More About Us
                </Button>
            </VStack>
        </Flex>
    )
}

export default HomeHero