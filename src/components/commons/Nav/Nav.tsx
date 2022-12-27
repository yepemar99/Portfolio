import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

//Redux
import React from "react";
import { useSelector } from "react-redux";
import Swiper from "swiper";
import { selectRoutes } from "../../../redux/routesSlice/routesSlice";
import { selectSliderPosition } from "../../../redux/sliderPositionSlice/sliderPositionSlice";
import DrawerP from "../DrawerP/DrawerP";

interface IProps {
  swiperRef: Swiper;
}

const Nav: React.FC<IProps> = (props) => {
  const soldOutProduct = useSelector(selectSliderPosition);
  const routes = useSelector(selectRoutes);
  const movilView: boolean = useBreakpointValue({ base: true, xl: false });
  return (
    <Flex
      justifyContent={{ base: "start", xl: "center" }}
      alignItems={"center"}
      height={{ base: "50px", xl: "100vh" }}
      mt={{ base: 3, xl: 0 }}
    >
      {movilView ? (
        <>
          {" "}
          <Box width={"100%"} className="wrap">
            <DrawerP swiperRef={props.swiperRef} />
          </Box>
        </>
      ) : (
        <>
          {" "}
          <Flex
            alignItems={"center"}
            pt={{ base: "0px", xl: "50px" }}
            flexDirection={{ base: "row", xl: "column" }}
          >
            {routes.map((itemRout) => {
              return (
                <Box
                  onClick={() => {
                    props.swiperRef.slideTo(itemRout.id, 1000, true);
                  }}
                  p={"12px 4px"}
                  key={itemRout.id}
                  sx={{ cursor: "pointer" }}
                >
                  <Text
                    p={"0px 2px"}
                    borderBottom={
                      soldOutProduct === itemRout.id ? "3px solid" : ""
                    }
                    transition={"border-width 0.1s linear"}
                    borderColor={"secondary"}
                    textAlign={"center"}
                    textStyle={"h5"}
                  >
                    {itemRout.route}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Nav;
