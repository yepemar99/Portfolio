import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IChallengesPerYear } from "../../../../../types/interfaces";
import ChallengeCard from "../../../../ChallengeCard/ChallengeCard";

interface IProps {
  challengesPerYear: IChallengesPerYear;
}

const ChallengesPerYear: React.FC<IProps> = (props) => {
  return (
    <Flex
      m={"5 0px 0px"}
      flexDirection={"column"}
      alignItems={{ base: "start", xl: "end" }}
      width={"100%"}
      className={"challengePeerYear"}
    >
      <Text color={"secondary"} textStyle="h5">
        {props.challengesPerYear.year}
      </Text>
      <Flex
        justifyContent={{ base: "start", xl: "space-between" }}
        flexWrap="wrap"
      >
        {props.challengesPerYear.challenges.map((item, key) => {
          return (
            <Box m={"10px 5px"} w={"270px"} key={item.id}>
              <ChallengeCard itemChallenge={item} />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ChallengesPerYear;
