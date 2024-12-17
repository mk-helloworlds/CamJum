import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {aboutMissionVision, aboutType} from "../../../constants/data.ts";

const AboutMission = () => {
    return (
        <Flex
            px={["24px", "24px", "110px"]}
            justifyContent="center"
            alignItems={['start', 'center', 'center']}
            gap={['5', '5', '5', '20']}
            direction={['column', 'column', 'column', 'row']}
            id="about-company"
            bg="#F8F8F8"
            minH="80vh"
            py="20"
        >
            {aboutMissionVision.map((data: aboutType, idx: number) => {
                return (
                    <Flex
                        w='784'
                        h={['350', '380', '380']}
                        py="30"
                        px={["10", "50", "50"]}
                        bg="white"
                        borderRadius="16px"
                        shadow="base"
                        direction="column"
                        alignItems="start"
                        key={idx}
                    >
                        <Image
                            src={data.image}
                            alt='Camjum'
                            h="96px"
                            loading="lazy"
                            objectFit='contain'/>
                        <Box flex={1}/>
                        <Box>
                            <Text
                                fontSize={['2rem', '3rem', '3rem']}
                                fontWeight="bold"
                                color="red"
                            >
                                {data.title}
                            </Text>
                            <Text
                                fontSize={["1em", "1.5em", "1.5em"]}
                                lineHeight="1.2"
                                maxW="30em"
                            >{data.description}</Text>
                        </Box>

                    </Flex>
                );
            })}
        </Flex>
    )
}

export default AboutMission