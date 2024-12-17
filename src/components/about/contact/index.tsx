import {Box, Button, Flex, Text, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {aboutContactData} from "../../../constants/data.ts";
import contactUSLogo from '../../../assets/contactUS.png'

const AboutContact = () => {
    const navigator = useNavigate();
    return (
        <Flex
            minH={["70vh", "70vh", "60vh", "80vh"]}
            w="100vw"
            alignItems="center"
            justifyContent="center"
            gap='5'
            backgroundImage={contactUSLogo}
            backgroundSize="cover"
            backgroundPosition="bottom"
            direction={['column']}
            px={["24px", "24px", "110px"]}
            id="about-company"
        >
            <VStack
                align="center"
                textAlign={['center', 'center', 'center', 'start']}

            >
                <Text
                    fontSize={['2rem', '3rem', '3rem']}
                    fontWeight="bold"
                    color="red"
                >
                    {aboutContactData.title}
                </Text>
                <Text
                    fontSize={["1em", "1.5em", "1.5em"]}
                    lineHeight="1.2"
                    px={['0', '0', '0', "15rem"]}
                    textAlign="center"
                >
                    {aboutContactData.description}
                </Text>
                <Box h="0.5rem"/>
                <Button
                    colorScheme='red'
                    fontSize={["1em", "1.5em", "1.5em"]}
                    size="lg"
                    onClick={() => {
                        window.scroll(0, 0);
                        navigator('/contact-us');
                    }}
                >
                    Get In Touch With Us
                </Button>
            </VStack>

        </Flex>
    )
}

export default AboutContact