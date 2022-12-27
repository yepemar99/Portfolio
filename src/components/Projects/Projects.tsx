import { Box, Flex } from "@chakra-ui/react";

import Challenges from "./commons/Challenges/Challenges";
import SKILLS from "./commons/Skills/Skills";

const Projects = () => {
  return (
    <Flex
      height={"100%"}
      w={"100%"}
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      className="flex"
    >
      <Box width={{ base: "100%", xl: "40%" }}>
        <SKILLS />
      </Box>
      <Box
        mt={{ base: "100px", xl: "0px" }}
        width={{ base: "100%", xl: "60%" }}
      >
        <Challenges />
      </Box>
    </Flex>
  );
};

export default Projects;
