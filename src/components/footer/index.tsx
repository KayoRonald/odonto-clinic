import {
  Box,
  Container,
  Image,
  Link,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Footer() {
  return (
    <>
      <Box as={"footer"} bg={"#00071A"} color={"white"} p={5}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Flex justify={'space-between'} gap={10} flexDirection={{ base: 'column', md: 'row' }}>
            <Stack spacing={6}>
              <Box>
                <Image
                  src="/logo-light.svg"
                  alt="Logo Odonto Clinic"
                  maxW={"13rem"}
                />
              </Box>
              <Text fontSize={"sm"}>
                Copyright © {new Date().getFullYear()} Odonto Clinic
              </Text>
            </Stack>
            <Box display={"flex"} flexDirection={"row"} gap={40}>
            <Stack>
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>Specialists</Link>
              <Link href={"#"}>Services</Link>
            </Stack> <Stack>
              <Link href={"#"}>Privacy policies</Link>
              <Link href={"#"}>Terms of use</Link>
            </Stack>
            </Box>            
          </Flex>
        </Container>
      </Box>
    </>
  );
}
