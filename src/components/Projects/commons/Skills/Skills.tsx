import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSkillsPeerCategory } from "../../../../redux/projectsSlice/projectsSlice";
import Topics from "./commons/Topics/Topics";

const SKILLS = () => {
  const skillsPeerCategory = useSelector(selectSkillsPeerCategory);
  return (
    <Box h={"100%"} display={"flex"} alignItems={"center"}>
      <Box>
        {" "}
        <Text textStyle="h4">SKILLS</Text>
        <Text color={"secondary"} textStyle={"caption"}>
          See the skills I have mastered
        </Text>
        <Box mt={"40px"}>
          {skillsPeerCategory.map((item) => {
            return (
              <Box mt={"12px"} key={item.id}>
                <Topics topic={item} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SKILLS;
