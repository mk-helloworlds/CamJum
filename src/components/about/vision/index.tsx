import {Box, Flex, Image, Text, VStack} from "@chakra-ui/react";
import {aboutVisonData} from "../../../constants/data.ts";
import visionLogo from '../../../assets/vision.png'

const AboutVision = () => {
    return (
        <Flex
            // minH="100vh"
            px={["24px", "24px", "110px"]}
            alignItems="center"
            justifyContent="center"
            gap='5'
            direction={['column', 'column', 'column', 'row']}
            id="about-company"
        >
            <VStack
                align={["center", "center", "center", 'start']}
                textAlign={['center', 'center', 'center', 'start']}
                pr={['0', '0', '0', "250px"]}
            >
                <Text
                    fontSize='3rem'
                    fontWeight="bold"
                    color="red"
                >
                    {aboutVisonData.title}
                </Text>
                <Text
                    fontSize="1.5rem"
                    lineHeight="1.2"
                >
                    {aboutVisonData.description}</Text>
            </VStack>
            <Box w="30%">
                <Image
                    borderRadius="full"
                    src={visionLogo}
                    alt='Camjum'
                    loading="lazy"
                    boxSize="95%"
                    objectFit='contain'/>
            </Box>
        </Flex>
    )
}

export default AboutVision