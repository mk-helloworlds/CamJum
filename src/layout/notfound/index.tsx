import {Flex, Text} from "@chakra-ui/react";

const NotFound = () => {
    return <Flex
        minH="100vh"
        w="100%"
        justifyContent="center"
        gap='5'
        backgroundSize="cover"
        backgroundPosition="right"
        direction={['column']}
        px={["24px", "24px", '24px', "110px"]}
        id="notfound"
    >
        <Text
            fontSize={['2rem', '3rem', '3rem']}
            fontWeight="bold"
            color="red"
            px="2em"
            textAlign="center"
        >
            Not found
        </Text>
        <Text
            fontSize={["1em", "1.5em", "1.5em"]}
            lineHeight="1.2"
            fontWeight="200"
            px={['0', '0', '0', "15rem"]}
            textAlign="center"
        >
            Sorry, the page you are looking for does not exist.
        </Text>

    </Flex>
}

export default NotFound