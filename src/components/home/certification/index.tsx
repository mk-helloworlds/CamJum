import {Flex, Text, VStack, Image, Box} from "@chakra-ui/react";
import CamjumCertification from '../../../assets/camjum_certification.jpg';
import CamjumCertificationII from '../../../assets/camjum_certification_2.png';

const HomeCertification = () => {
    return <Flex
        minH={["80vh", "80vh", "70vh", "80vh"]}
        // alignItems="center"
        // justifyContent="center"
        gap='5'
        direction={['column']}
        px={["24px", "24px", "110px"]}
        py="18"
        id="about-company"
    >
        <VStack
            align="center"
            textAlign={['center', 'center', 'start']}

        >
            <Text
                fontSize={['2rem', '3rem', '3rem']}
                fontWeight="bold"
                color="red"
                textAlign="center"
            >
                Certified for Quality and Trust
            </Text>
            <Text
                fontSize={["1em", "1.5em", "1.5em"]}
                lineHeight="1.2"
                fontWeight="200"
                px={[0, 0, 0, "15rem"]}
                textAlign="center"

            >
                We're proud to display our official business certification, affirming our commitment to providing you
                with reliable and trusted service. At CamJum, we not only promise seamless booking and direct flights,
                but also the peace of mind that comes with a certified travel partner.
            </Text>
            <Box h="1.5rem"/>
            <Flex
                direction={['column', 'row', 'row']}
                gap="10">
                <Image
                    h={['366', '366', "366"]}
                    w={["252,5", "252,5", "252,5"]}
                    rounded="25px"
                    boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)"
                    src={CamjumCertification}
                />
                <Image
                    h='366'
                    w="252,5"
                    rounded="25px"
                    boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)"
                    src={CamjumCertificationII}
                />
            </Flex>

        </VStack>

    </Flex>
}
export default HomeCertification