import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import avatar from "../../assets/avatar.jpg";
import Img from "../commons/Img/Img";

const AboutMe = () => {
  const movilView: boolean = useBreakpointValue({ base: true, xl: false });
  return (
    <Flex h={"100%"} alignItems={"center"}>
      <Flex className="AboutMe" flexDirection={{ base: "column", xl: "row" }}>
        <Flex
          justifyContent={{ base: "center", xl: "center" }}
          alignItems={"center"}
          position={"relative"}
          mb={5}
          w={{ base: "100%", xl: "45%" }}
        >
          <Box
            sx={{
              position: "absolute",
              width: `${movilView ? "250px !important" : "400px !important"}`,
              height: `${movilView ? "250px !important" : "400px !important"}`,
            }}
            className="aro"
            border={"1px solid"}
            borderRadius={"50%"}
            mt={"5%"}
            ml={"5%"}
          />
          <Box
            sx={{
              position: "relative",
              width: `${movilView ? "250px !important" : "400px !important"}`,
              height: `${movilView ? "250px !important" : "400px !important"}`,
            }}
          >
            <Img
              src={avatar.src}
              sxProps={{ borderRadius: "50% !important" }}
            />
          </Box>
        </Flex>
        <Box w={{ base: "100%", xl: "55%" }} flexGrow={"1"}>
          <Heading
            fontWeight={"600"}
            as={"h1"}
            fontSize={{ base: "2xl", xl: "4xl" }}
            color={"secondary"}
          >
            ABOUT MEE
          </Heading>
          <Box
            m={"22px 0px"}
            borderLeft="2px solid"
            borderLeftColor={"borderColor"}
            pl={{ base: "20px", sm: "33px" }}
            pr={{ base: "0px", xl: "10px" }}
          >
            <Text
              color={"secondary"}
              as={"h4"}
              textStyle={"text"}
              textAlign={"justify"}
            >
              I design and develop websites and web applications using HTML, CSS
              and JavaScript. When dealing with a project I pay attention to the
              smallest details addressing problems with patience. Web design and
              development help me to free my creative mind and allow me satisfy
              my desire towards constant self growth.
            </Text>
          </Box>
        </Box>
        {movilView ? (
          <>
            <Flex>
              <Box textAlign={"center"}>
                <a target={"_blank"} href="https://t.me/yepemar99">
                  <Button
                    borderRadius="45px"
                    bg="bg"
                    color={"primary"}
                    p={"10px 10px"}
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    <FaTelegram fontSize={"60px"} />
                  </Button>
                </a>
              </Box>
              <Box textAlign={"center"}>
                <a target={"_blank"} href="https://github.com/yepemar99">
                  <Button
                    borderRadius="45px"
                    bg="bg"
                    color={"primary"}
                    p={"10px 10px"}
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    <FaGithub fontSize={"60px"} />
                  </Button>
                </a>
              </Box>
            </Flex>
          </>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

export default AboutMe;
