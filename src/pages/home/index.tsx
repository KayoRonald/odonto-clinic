import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import HeroSection from "../../components/hero";
import StatsWithIcons from "../../components/stats";

export function Home() {
  return (
    <>
      <Box bg={"#3B72FF"} w={"full"} p={10}>
        <HeroSection />
      </Box>
      <SimpleGrid
        mt={"-7rem"}
        as={Container}
        maxW="4xl"
        spacing={4}
        columns={[2, null, 3]}
      >
        <Card textAlign={'center'} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}>
          <CardHeader>
            <Heading size="md">Tecnology</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            We are not satisfied with the average. Our goal is to serve you and treat you with judicious methods.
            </Text>
          </CardBody>
        </Card>
        <Card  textAlign={'center'} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}>
          <CardHeader>
            <Heading size="md"> Qualification</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            We are not satisfied with the average. Our goal is to serve you and treat you with judicious methods.            </Text>
          </CardBody>
        </Card>
        <Card  textAlign={'center'} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}>
          <CardHeader>
            <Heading size="md">Tecnology</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            We are not satisfied with the average. Our goal is to serve you and treat you with judicious methods.            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Box mt={20}>
        <Heading textAlign={"center"}>Services</Heading>
        <StatsWithIcons />
      </Box>
    </>
  );
}
