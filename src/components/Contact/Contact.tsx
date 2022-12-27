import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectStatusAlert } from "../../redux/alertStatusSlice/alertStatusSlice";
import Form from "../Form/form";

const Contact: React.FC = () => {
  const movilView: boolean = useBreakpointValue({ base: true, xl: false });
  const alertStatus = useSelector(selectStatusAlert);

  return (
    <Box h={"100%"} display={"flex"} alignItems={"center"} width={"100%"}>
      {alertStatus.statusAlert ? (
        <Box
          sx={{
            width: "100%",
            position: "fixed",
            top: "50px",
            "@keyframes example": {
              "0%": { opacity: "0" },
              "25%": { opacity: "1" },
              "50%": { opacity: "1" },
              "75%": { opacity: "1" },
              "100%": { opacity: "0" },
            },
            animationName: "example",
            animationDuration: "3s",
          }}
        >
          <Alert
            color={"borderColor"}
            sx={{ borderRadius: "5px", maxWidth: "310px", margin: "0px auto" }}
            status={alertStatus.valid}
          >
            <AlertIcon />
            <Text fontWeight={600}>{alertStatus.message}</Text>
          </Alert>
        </Box>
      ) : (
        <></>
      )}
      <Flex w={"100%"} flexDirection={{ base: "column", xl: "row" }}>
        <Box w={{ base: "100%", xl: "60%" }}>
          <Box maxW={{ base: "300px", sm: "490px" }} m={"0px auto"}>
            <Text textAlign={"center"} textStyle={"h1"}>
              Contact Me
            </Text>
            <Box
              width={"15%"}
              border={"3px solid"}
              borderColor={"primary"}
              borderRadius={"8px"}
            />
            <Box
              width={"15%"}
              ml={"35px"}
              mt={"10px"}
              border={"3px solid"}
              borderColor={"primary"}
              borderRadius={"8px"}
            />
          </Box>
          <Box ml={!movilView ? "35px" : "0px"} mt={"20px"}>
            <Text
              textAlign={movilView ? "center" : "left"}
              textStyle={"text"}
              color={"secondary"}
            >
              I'm available for development-related work.
            </Text>
          </Box>
          <Flex
            justifyContent={movilView ? "center" : "left"}
            mt={"10px"}
            ml={!movilView ? "35px" : "0px"}
          >
            <Text textStyle={"caption"}>Email:</Text>
            <Text textStyle={"caption"} color={"secondary"} ml={"5px"}>
              yepemar@gmail.com
            </Text>
          </Flex>
        </Box>
        <Flex
          mt={"50px"}
          justifyContent={"center"}
          w={{ base: "100%", xl: "40%" }}
        >
          <Box w={"100%"}>
            <Text textAlign={"center"} textStyle={"h5"} color={"secondary"}>
              Have a question or want to work together?
            </Text>
            <Box mt={"20px"} className="containerForm" w={"100%"}>
              <Form />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
