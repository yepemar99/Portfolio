import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const PresentationWeb = () => {
  return (
    <Stack className="Presentation" maxW={{ base: "", xl: "700px" }}>
      <Text
        color={"secondary"}
        as={"h2"}
        fontSize={{ base: "lg", xl: "1xl" }}
        fontWeight={"200"}
      >
        Hi, I'm
      </Text>
      <Box>
        <Heading
          fontWeight={"600"}
          ml={"10px"}
          as={"h1"}
          fontSize={{ base: "2xl", xl: "4xl" }}
        >
          Marcelo Llanes
        </Heading>
      </Box>
      <Box>
        <Heading
          color={"secondary"}
          m={"0px 0px 10px 30px"}
          as={"h1"}
          fontSize={{ base: "1xl", xl: "3xl" }}
        >
          I build softwares 🛠
        </Heading>
      </Box>

      <Box>
        <Text
          color={"primary"}
          as={"h4"}
          fontSize={{ base: "lg", xl: "xl" }}
          fontWeight={"900"}
          display={"flex"}
        >
          <Text color={"secondary"} mr={2}>
            I'm a{" "}
          </Text>{" "}
          Frontend Developer
        </Text>
      </Box>
    </Stack>
  );
};

const Presentation = () => {
  return (
    <Box h={"100%"} display={"flex"} alignItems={"center"}>
      <PresentationWeb />
    </Box>
  );
};

export default Presentation;
