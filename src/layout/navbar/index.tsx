import {
    Box, Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton, Image, Link, Stack,
    useDisclosure, VStack
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import camjumLogo from '../../../public/camjum.png';

const Navbar = () => {
    const navigator = useNavigate()
    const {isOpen, onOpen, onClose} = useDisclosure()
    return <Flex
        as="header"
        position="fixed"
        w="100%"
        zIndex={10}
        maxH="10vh"
        px={["24px", "24px", "110px"]}
        py={["24px", "24px", "24px", "50px"]}
        justifyContent="space-between"
        alignItems="center"
        bg="#F9F9F9"
    >
        <Flex alignItems="center">
            <IconButton
                icon={<HamburgerIcon/>}
                isRound={true}
                aria-label="hamburger icon"
                display={['flex', 'flex', 'flex', 'none']}
                size="lg"
                onClick={onOpen}
            />
            <Drawer
                placement="left"
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader/>
                        <DrawerCloseButton
                            borderRadius="full"
                            left="5px"
                            bg="gray.100"
                            size="lg"
                        />
                        <DrawerBody pt="45">
                            <VStack align="start">
                                <Link href="/">Home</Link>
                                <Link href="/about">About</Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
            <Box>
                <Image
                    borderRadius="full"
                    src={camjumLogo}
                    boxSize={['80px', '80px', '80px', '120px']}
                    alt='Camjum'
                    objectFit='cover'
                    cursor="pointer"
                    loading="lazy"
                    onClick={() => {
                        window.scroll(0, 0);
                        navigator('/');
                    }}
                />
            </Box>
        </Flex>
        <Flex
            alignItems="center"
        >
            <Stack
                direction={['column', 'row']}
                spacing='24px'
                display={['none', 'none', 'none', 'flex']}
            >
                <Link
                    href="/"
                    style={{textDecoration: 'none', color: 'inherit'}}
                >Home</Link>
                <Link
                    href="/about"
                    style={{textDecoration: 'none', color: 'inherit'}}
                >About</Link>
            </Stack>
            <Box w={['0', '0', '23px', '50px']}/>
            <Button colorScheme='red' onClick={() => {
                window.scroll(0, 0);
                navigator('contact-us');
            }}>
                Contact Us
            </Button>
        </Flex>
    </Flex>
}

export default Navbar