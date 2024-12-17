import {Box, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";
import {whyChooseData, whyChooseType} from "../../../constants/data.ts";

const HomeWhy = () => {
    return <Flex
        py="18"
        px={["24px", "50px", "110px"]}
        gap='5'
        alignItems='center'
        direction={['column']}
        id="home-why"
    >
        <Text
            fontSize={['2rem', '3rem', '3rem']}
            fontWeight="bold"
            color="red"
            px="2em"
            textAlign="center"
        >
            Why Choose CamJum?
        </Text>
        <Box h={[0, "5px", "5px"]}/>
        <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
            columnGap={['10', '10', '200']}
            rowGap={['30', '30', '50']}
        >
            {whyChooseData.map((data: whyChooseType, idx: number) => {
                return (<GridItem key={idx}>

                    <Flex
                        direction="column"
                        alignItems="center"
                    >
                        <Box
                            boxSize="150px"
                            p="28px"
                            bg="red"
                            borderRadius="55"
                        >
                            <Image
                                src={data.image}
                                loading="lazy"
                                alt={data.title}
                                objectFit='contain'/>
                        </Box>
                        <Box h={["1em", "2em", "2em"]}/>
                        <Text
                            fontSize="1.5em"
                            fontWeight="700"
                            minW={[0, 0, "300px", "500px"]}
                            textAlign="center"
                            px="2em"
                        >
                            {data.title}
                        </Text>
                        <Text
                            fontSize="1rem"
                            fontWeight="400"
                            minW="500px"
                            textAlign="center"
                            px="6em"
                        >
                            {data.description}
                        </Text>
                    </Flex>
                </GridItem>);
            })}
        </Grid>
    </Flex>
}

export default HomeWhy