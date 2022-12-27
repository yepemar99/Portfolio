import { Box, Flex, Text } from "@chakra-ui/react";
import { ITopic } from "../../../../../../types/interfaces";
import ButtonS from "../../../../../commons/Button/Button";

interface IProps {
  topic: ITopic;
}

const Topics: React.FC<IProps> = (props) => {
  return (
    <Box>
      <Text color={"secondary"} textStyle="h5">
        {props.topic.name}
      </Text>
      <Flex flexWrap={"wrap"}>
        {props.topic.skills.map((item) => {
          return (
            <Box m={"4px 4px"} key={item.id}>
              <ButtonS
                borderRadius="8px"
                padding="1px 10px"
                children={
                  <Text as={"div"} fontWeight={"400"}>
                    {item.name}
                  </Text>
                }
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Topics;
