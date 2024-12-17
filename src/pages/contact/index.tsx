import {Box, Flex, Link, Text, VStack, Grid, GridItem} from "@chakra-ui/react";

const ContactUS = () => {
    return <Flex
        minH="100vh"
        justifyContent="center"
        gap='5'
        direction={['column']}
        px={["24px", "12px", "12px", "110px"]}
        mx="1em"
        pt="10em"
        pb="4em"
        overflow="hidden"
        id="contact-us"
    >
        <VStack
            align="center"
            textAlign={['center', 'center', 'start']}

        >
            <Text
                fontSize={['2rem', '3rem', '3rem']}
                fontWeight="bold"
            >
                Connect with CamJum
            </Text>
            <Text
                fontSize={["1em", "1.5em", "1.5em"]}
                lineHeight="1.2"
                fontWeight="200"
                px={['0', '0', '0', "15rem"]}
                textAlign="center"
            >
                We're excited to hear from you! Share your thoughts, questions, or service inquiries with us, and our
                team will respond promptly.
            </Text>
            <Box h="8"/>
            <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(4, 1fr)"]}
                templateRows="repeat(2, 1fr)"
                gap={6}
                height="auto"
                alignItems="center"
                w={['100%', '100%', '100%', "70%"]}
                justifyContent="center"
            >
                <GridItem colSpan={4}>
                    <Link
                        target="_blank"
                        style={{textDecoration: 'none', color: 'inherit'}}
                        href="https://www.google.com/maps/place/4th+floor,+20+Maesan-ro,+Paldal-gu,+Suwon,+Gyeonggi-do,+South+Korea/@37.2674069,127.0037849,17z/data=!3m1!4b1!4m5!3m4!1s0x357b43193d7f288b:0xe352fe6a377b4616!8m2!3d37.2674069!4d127.0037849?entry=ttu">
                        <Flex
                            direction="row"
                            bg="#F8F8F8"
                            py="8"
                            px="4"
                            borderRadius="16px"
                            shadow="base"
                            alignItems="center"
                            gap="5"
                        >
                            <Box pl="30">
                                <Text
                                    fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]}
                                    color="red"
                                    fontWeight="700"
                                    textAlign="start"
                                >Our main office</Text>
                                <Text
                                    fontSize={["0.9em", "1.5em", "1.5em"]}
                                    lineHeight="1.2"
                                    fontWeight="200"
                                    color="#000"
                                    textAlign="start"
                                    w={["200px","100%"]}
                                >4th floor, 20, Maesan-ro, Paldal-gu, Suwon-si, Gyeonggi-do, Republic of Korea</Text>
                            </Box>
                        </Flex>
                    </Link>
                </GridItem>
                <GridItem colSpan={[4, 4, 2]}>
                    <Link
                        style={{textDecoration: 'none', color: 'inherit'}}
                        href="tel:+821082714577"
                    >
                        <Flex
                            direction="row"
                            bg="#F8F8F8"
                            py="8"
                            px="4"
                            borderRadius="16px"
                            alignItems="center"
                            shadow="base"
                            gap="5"
                        >
                            <Box pl="30">
                                <Text
                                    fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]}
                                    color="red"
                                    fontWeight="700"
                                    textAlign="start"
                                >Phone number</Text>
                                <Text
                                    fontSize={["0.9em", "1.5em", "1.5em"]}
                                    lineHeight="1.2"
                                    fontWeight="200"
                                    color="#000"
                                    textAlign="start"
                                >(+82)10-8271-4577</Text>
                            </Box>
                        </Flex>
                    </Link>
                </GridItem>
                <GridItem colSpan={[4, 4, 2]}>
                    <Flex
                        direction="row"
                        bg="#F8F8F8"
                        py="8"
                        px="4"
                        borderRadius="16px"
                        alignItems="center"
                        shadow="base"
                        gap="5"
                    >
                        <Box pl="30">
                            <Text
                                fontSize={["1.5em", "1.5em", "1.5em", "1.5em"]}
                                color="red"
                                fontWeight="700"
                                textAlign="start"
                            >Email</Text>
                            <Text
                                fontSize={["0.9em", "1.5em", "1.5em"]}
                                lineHeight="1.2"
                                fontWeight="200"
                                color="#000"
                                textAlign="start"
                            >camjumtha@gmail.com</Text>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </VStack>

    </Flex>
}
export default ContactUS