import {Image, Flex, VStack, Box, Grid, GridItem, Text, Link, Icon, Button} from "@chakra-ui/react";
import {EmailIcon} from "@chakra-ui/icons";
import camjumLogo from '../../../public/camjum.png'
import {FaPhoneVolume} from "react-icons/fa6";
import {FaMapMarkerAlt} from "react-icons/fa";


const Footer = () => {
    return (
        <Flex
            px={["24px", "24px", "110px"]}
            py="5em"
            bg="#F9F9F9"
            direction="column"
        >
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
                columnGap={200}
                rowGap={5}
                gap="3"
            >
                <GridItem>
                    <VStack
                        align="start">
                        <Image
                            boxSize='100px'
                            src={camjumLogo}
                            alt='Camjum'
                            loading="lazy"
                            objectFit="cover"
                        />
                        <Text minW="200px">
                            Experience seamless travel from Korea to Cambodia with CamJum
                        </Text>
                        <Button onClick={() => window.open('https://www.facebook.com/camjum')} variant="link">
                            <Text fontSize="1rem" fontWeight="medium" color="gray">
                                Facebook
                            </Text>
                        </Button>
                    </VStack>
                </GridItem>
                <GridItem>
                    <VStack align="start">
                        <Text
                            fontSize='1.5rem'
                            fontWeight="bold"
                            color="red"
                        >
                            Contact US
                        </Text>
                        <Box h="0.2rem"/>
                        <Link
                            style={{textDecoration: 'none', color: 'inherit'}}
                            href="tel:+821082714577"
                        >
                            <Flex gap='5'
                                  alignItems="center"
                            >
                                <Icon
                                    as={FaPhoneVolume}
                                    color="red"/>
                                <Text>+8210-8271-4577</Text>
                            </Flex>
                        </Link>
                        <Link
                            style={{textDecoration: 'none', color: 'inherit'}}
                            href="mailto:camjumtha@gmail.com"
                        >
                            <Flex gap='5'
                                  alignItems="center"
                            >
                                <EmailIcon color="red"/>
                                <Text>camjumtha@gmail.com</Text>
                            </Flex>
                        </Link>
                        <Link
                            target="_blank"
                            style={{textDecoration: 'none', color: 'inherit'}}
                            href="https://www.google.com/maps/place/4th+floor,+20+Maesan-ro,+Paldal-gu,+Suwon,+Gyeonggi-do,+South+Korea/@37.2674069,127.0037849,17z/data=!3m1!4b1!4m5!3m4!1s0x357b43193d7f288b:0xe352fe6a377b4616!8m2!3d37.2674069!4d127.0037849?entry=ttu"
                        >
                            <Flex gap='5'
                                  alignItems="start"
                            >

                                <Icon
                                    as={FaMapMarkerAlt}
                                    color="red"/>
                                <Text>4th floor, 20, Maesan-ro, Paldal-gu, Suwon-si, Gyeonggi-do, Republic of
                                    Korea</Text>
                            </Flex>
                        </Link>

                    </VStack>
                </GridItem>
                <GridItem>
                    <VStack
                        align="start"
                        h="100%"
                    >
                        <Text
                            fontSize='1.5rem'
                            fontWeight="bold"
                            color="red"
                        >Company</Text>
                        <Box h="0.2rem"/>
                        <Link href="/about">About</Link>
                        <Link href="/contact-us">Contact</Link>
                        {/*<Link href="/privacy">Policy & Privacy</Link>*/}
                    </VStack>
                </GridItem>
            </Grid>

        </Flex>
    )
}

export default Footer