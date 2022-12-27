import { Box, Button, Flex } from "@chakra-ui/react";
import { FaGithub, FaTelegram } from "react-icons/fa";
const SocialNetworks = () => {
  return (
    <Flex
      pb={{ base: "0px", xl: "50px" }}
      height={{ base: "", xl: "100vh" }}
      alignItems={"end"}
    >
      <Flex
        w={"100%"}
        className={"aqui"}
        flexDirection={{ base: "row", xl: "column" }}
        alignItems={"center"}
      >
        <Box textAlign={"center"} m={"40px auto"}>
          <a target={"_blank"} href="https://t.me/yepemar99">
            <Button
              borderRadius="45px"
              bg="bg"
              color={"primary"}
              _hover={{ transform: "scale(1.1)" }}
            >
              <FaTelegram fontSize={"60px"} />
            </Button>
          </a>
        </Box>
        <Box textAlign={"center"} m={"10px auto"}>
          <a target={"_blank"} href="https://github.com/yepemar99">
            <Button
              borderRadius="45px"
              bg="bg"
              color={"primary"}
              _hover={{ transform: "scale(1.1)" }}
            >
              <FaGithub fontSize={"60px"} />
            </Button>
          </a>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SocialNetworks;
