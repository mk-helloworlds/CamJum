import {Box, VStack} from "@chakra-ui/react";
import {HomeCertification, HomeDestination, HomeHero, HomeMobileApp, HomeWhy} from "../../components/home";
import {AboutContact} from "../../components/about";

const Home = () => {
    return (
        <VStack
            w="full"
            overflow="hidden"
        >
            <HomeHero/>
            <HomeMobileApp/>
            <HomeDestination/>
            <Box h={["15", "20px", 0]}/>
            <HomeWhy/>
            <HomeCertification/>
            <Box h={[0, 0, 0, "18"]}/>
            <AboutContact/>
        </VStack>
    )
}
export default Home