import {Box, Flex} from "@chakra-ui/react";
import {AboutCompany, AboutContact, AboutMission} from "../../components/about";

const About = () => {
    return (
        <Flex
            direction="column"
            w="full"
            overflow="hidden"
            // px={["24px", "24px", "110px"]}
        >
            <AboutCompany/>
            <AboutMission/>
            <Box h={["30px", "30px", 0]}/>
            <AboutContact/>
        </Flex>
    )
}

export default About