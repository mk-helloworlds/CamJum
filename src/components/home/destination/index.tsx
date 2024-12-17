import {Box, Button, Flex, Text, VStack} from "@chakra-ui/react";
import homeDestinationLogo from '../../../assets/homeDestination.png'
import {useNavigate} from "react-router-dom";

const HomeDestination = () => {
    const navigator = useNavigate()
    return (
        <Flex
            minH="100vh"
            w="100%"
            justifyContent="center"
            gap='5'
            backgroundImage={homeDestinationLogo}
            backgroundSize="cover"
            backgroundPosition="right"
            direction={['column']}
            px={["24px", "24px", '24px', "110px"]}
            id="home-destination"
        >
            <VStack
                align={['center', 'center', 'center', 'start']}
                textAlign={['center', 'center', 'center', 'start']}

            >
                <Text
                    fontSize={['2rem', '3rem', '3rem']}
                    fontWeight="700"
                    color="white"
                    maxW="8em"
                >
                    Direct to Your Destination
                </Text>
                <Text
                    fontSize={["1em", "1.5em", "1.5em"]}
                    lineHeight={[1.5, 1.5, 10]}
                    fontWeight="200"
                    maxW="20em"
                    color="white"
                >
                    Experience the Convenience of Non-Stop Flights from Korea to Cambodia with CamJum's Platform.
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
                    More About Us
                </Button>
            </VStack>

        </Flex>
    )
}

export default HomeDestination