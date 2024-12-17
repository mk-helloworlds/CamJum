import {Flex, Text, Image, Box} from "@chakra-ui/react";
import mobileAppLogo from '../../../assets/mobileApp.png';

const HomeMobileApp = () => {

    return <Flex
        minH={["60vh", "60vh", "60vh", "90vh"]}
        py={[8, 8, 8, 0]}
        gap={['23px', '23px', '23px', '100px']}
        direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        alignItems="center"
        px={["24px", "24px", "110px"]}
        id="home-mobile"

    >
        <Image
            // w={[242, 242, 402]}
            w={["40vw", "40vw", "40vw", "30vw"]}
            // h={[222, 222, 382]}
            objectFit="cover"
            src={mobileAppLogo}/>
        <Box>
            <Text
                textAlign={["center", "center", "center", "start"]}
                fontSize={['2rem', '3rem', '3rem']}
                fontWeight="700"
                color="black"
            >
                Book & Fly Direct with
            </Text>
            <Text
                textAlign={["center", "center", "center", "start"]}
                fontSize={['2rem', '3rem', '3rem']}
                fontWeight="700"
                color="red"
            >
                CamJum
            </Text>
            <Box h="15"/>
            <Text
                textAlign={["center", "center", "center", "start"]}
                fontSize={["1em", "1.5em", "1.5em"]}
                lineHeight={[1.5, 1.5, 10]}
                fontWeight="200"
            >
                Our intuitive app is your gateway to swift booking. Choose your direct flight from Korea to Cambodia ,
                make an instant payment, and receive your ticket in moments.
            </Text>
        </Box>
    </Flex>
}
export default HomeMobileApp