import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IChallenge } from "../../types/interfaces";
import Img from "../commons/Img/Img";
import ModalChallenge from "../Projects/commons/Challenges/ModalChallenge/ModalChallenge";

interface IProps {
  itemChallenge: IChallenge;
}

const ChallengeCard: React.FC<IProps> = (props) => {
  const [subTitle, setSubTitle] = useState<string[]>([""]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  useEffect(() => {
    let aux = [""];
    if (props.itemChallenge.subTitle.length > 22) {
      aux.push(props.itemChallenge.subTitle.slice(0, 22));
      if (
        props.itemChallenge.subTitle.slice(
          0,
          props.itemChallenge.subTitle.length
        ).length > 42
      ) {
        aux.push(props.itemChallenge.subTitle.slice(20, 42) + "...");
      }
    } else {
      aux.push(props.itemChallenge.subTitle);
    }

    setSubTitle(aux);
  }, []);

  return (
    <Box sx={{ cursor: "pointer" }} onClick={onOpen} className="ChallengeCard">
      <ModalChallenge
        statusModal={{ isOpen, onOpen, onClose }}
        challenge={props.itemChallenge}
      />
      <Box
        w={"100%"}
        borderRadius={"8px"}
        color={"primary"}
        bg="buttonColor"
        _active={{}}
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        overflow={"hidden"}
        padding="8px 12px"
      >
        <Flex alignItems={"center"} w={"100%"}>
          <Box
            mr={"10px"}
            sx={{
              position: "relative",
              width: "63px !important",
              height: "63px !important",
            }}
          >
            <Img
              src={props.itemChallenge.imageSrc}
              sxProps={{ borderRadius: "8px !important" }}
            />
          </Box>

          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            width={"70%"}
          >
            <Box width={"100%"}>
              <Text textAlign={"left"} textStyle={"skillTitle"}>
                {props.itemChallenge.title.length > 10
                  ? `${props.itemChallenge.title.slice(0, 10) + "..."}`
                  : props.itemChallenge.title}
              </Text>{" "}
            </Box>
            <Box>
              <Text
                color={"secondary"}
                textAlign={"left"}
                textStyle={"subtitleChallenge"}
              >
                {props.itemChallenge.subTitle.length > 20
                  ? `${props.itemChallenge.subTitle.slice(0, 20) + "..."} `
                  : props.itemChallenge.subTitle}
              </Text>{" "}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ChallengeCard;
