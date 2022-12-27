import {
  Box,
  Button,
  ModalHeader,
  Text,
  useBreakpointValue,
  UseDisclosureProps,
} from "@chakra-ui/react";
import ButtonS from "../../../../commons/Button/Button";
import Img from "../../../../commons/Img/Img";
import ModalP from "../../../../commons/Modal/Modal";

//Icons
import { FaGithub } from "react-icons/fa";

//Prueba
import { IChallenge } from "../../../../../types/interfaces";

import React from "react";

interface IProps {
  challenge: IChallenge;
  statusModal: UseDisclosureProps;
}

const ModalChallenge: React.FC<IProps> = (props) => {
  const movilView: boolean = useBreakpointValue({ base: true, xl: false });
  return (
    <ModalP statusModal={props.statusModal}>
      <Box padding={"0px 20px"}>
        <ModalHeader
          sx={{ padding: `${movilView ? "16px 0px" : "16px 24px"}` }}
        >
          <Box alignItems={"center"} display={"flex"}>
            <Box
              mr={"15px"}
              sx={{
                position: "relative",
                width: `${movilView ? "50px !important" : "70px !important"}`,
                height: `${movilView ? "50px !important" : "70px !important"}`,
              }}
            >
              <Img src={props.challenge.logoSrc} />
            </Box>
            <Text as={"div"}>{props.challenge.title}</Text>

            <Box></Box>
          </Box>
        </ModalHeader>
        <Box
          display={"flex"}
          justifyContent={"center"}
          margin={"0px auto"}
          w={"100%"}
          mb={"30px"}
        >
          <Box
            sx={{
              position: "relative",
              width: "95% !important",
              height: `${movilView ? "20vh !important" : "60vh !important"}`,
            }}
          >
            <Img src={props.challenge.imageSrc} />
          </Box>
        </Box>
        <Box
          borderRadius={"3px"}
          height={"5px"}
          bg={"primary"}
          w={"95%"}
          margin={"20px auto "}
        />
        <ModalHeader
          sx={{ padding: `${movilView ? "16px 0px" : "16px 24px"}` }}
        >
          {" "}
          <Box>
            <Text mb={2}>Description</Text>
            <Text fontSize={"16px"}> {props.challenge.description}</Text>
          </Box>
          <Box mt={10}>
            <Text mb={2}>SKILLS</Text>
            <Box flexWrap={"wrap"} display={"flex"}>
              {props.challenge.skills.map((skillItem) => {
                return (
                  <Box mr={2} key={skillItem.id}>
                    <ButtonS
                      borderRadius="8px"
                      padding="1px 10px"
                      color="bg"
                      children={
                        <Text as={"div"} fontWeight={"400"}>
                          {skillItem.name}
                        </Text>
                      }
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </ModalHeader>
        <ModalHeader
          sx={{ padding: `${movilView ? "16px 0px" : "16px 24px"}` }}
        >
          {" "}
          <Box flexWrap={"wrap"} display={"flex"} justifyContent={"end"}>
            <Box mb={3} mr={2}>
              <a target={"_blank"} href={props.challenge.url}>
                <Button
                  disabled={props.challenge.url === "" ? true : false}
                  borderRadius="8px"
                  _hover={{ color: "bg", bg: "primary" }}
                  transition={"color 1s"}
                  bg="bg"
                  padding="25px 30px"
                  maxWidth={"300px"}
                  children={
                    <Text
                      letterSpacing={"2px"}
                      fontWeight={"900"}
                      textTransform={"uppercase"}
                    >
                      Demo
                    </Text>
                  }
                />
              </a>
            </Box>
            <Box>
              <a target={"_blank"} href={props.challenge.sourceCodeUrl}>
                <Button
                  borderRadius="8px"
                  disabled={props.challenge.sourceCodeUrl === "" ? true : false}
                  bg="bg"
                  padding="25px 30px"
                  _hover={{ color: "bg", bg: "primary" }}
                  transition={"color 1s"}
                  /*  maxWidth={"300px"} */
                  children={
                    <Box alignItems={"center"} display={"flex"}>
                      <Box mr={2}>
                        <FaGithub fontSize={"25px"} />
                      </Box>
                      <Text
                        letterSpacing={"2px"}
                        fontWeight={"900"}
                        textTransform={"uppercase"}
                      >
                        Source Code
                      </Text>
                    </Box>
                  }
                />
              </a>
            </Box>
          </Box>
        </ModalHeader>
      </Box>
    </ModalP>
  );
};

export default ModalChallenge;
