import React from "react";
import {
  chakra,
  Flex,
  HStack,
  VisuallyHidden,
  useColorModeValue,
  ButtonGroup,
  Button,
  Image,
  Box,
  Link,
} from "@chakra-ui/react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => (
  <chakra.header
    shadow="md"
    transition="all 0.5s ease-in-out"
    pos="fixed"
    top="0"
    zIndex="modal"
    w="full"
    px={{ base: 2, sm: 4 }}
    py={4}
    mb={10}
    css={{
      backdropFilter: "saturate(180%) blur(5px)",
      backgroundColor: useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(26, 32, 44, 0.8)"
      ),
    }}
  >
    {children}
  </chakra.header>
);

export default function NavHero() {
  return (
    <>
      <Header>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          as="nav"
        >
          <Flex>
            <VisuallyHidden>Logo</VisuallyHidden>
            <Box as={Link} href="/">
              <Image src="/Logo.svg" alt="Logo Odonto Clinic" maxW={"10rem"} />
            </Box>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            {/* <DesktopNav /> */}
            {/* <Link>A</Link> */}
            <ButtonGroup>
              <Button bg="blue.300">Contact</Button>
            </ButtonGroup>
            {/* <MobileNav /> */}
          </HStack>
        </Flex>
      </Header>
    </>
  );
}
