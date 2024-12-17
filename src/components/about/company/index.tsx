import {Flex, Image, Text} from "@chakra-ui/react";
import {aboutCompanyData} from "../../../constants/data";
import camjumLogo from '../../../../public/camjum.png'

const AboutCompany = () => {
    return (
        <Flex
            minH="100vh"
            px={["24px", "24px", "110px"]}
            alignItems="center"
            justifyContent="center"
            gap={['0', '0', '0', '5']}
            direction={['column', 'column', 'column', 'row']}
            id="about-company"
        >
            <Image
                w="30%"
                borderRadius="full"
                src={camjumLogo}
                alt='Camjum'
                loading="lazy"
                objectFit='contain'/>
            <Flex
                direction="column"
                align={["center", "center", "center", 'start']}
                textAlign={['center', 'center', 'center', 'start']}
                pl={['0', '0', '0', "250px"]}
            >
                <Text
                    fontSize={['2rem', '3rem', '3rem']}
                    fontWeight="bold"
                    color="red"
                >
                    {aboutCompanyData.title}
                </Text>
                <Text
                    fontSize={["1em", "1.5em", "1.5em"]}
                    lineHeight="1.2">{aboutCompanyData.description}</Text>
            </Flex>
        </Flex>
    )
}

export default AboutCompany