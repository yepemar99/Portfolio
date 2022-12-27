import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { GiRaiseZombie } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swiper from "swiper";
import { selectRoutes } from "../../../redux/routesSlice/routesSlice";
import { selectSliderPosition } from "../../../redux/sliderPositionSlice/sliderPositionSlice";

interface IProps {
  swiperRef: Swiper;
}

const DrawerP: React.FC<IProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const soldOutProduct = useSelector(selectSliderPosition);
  const routes = useSelector(selectRoutes);
  const movilView: boolean = useBreakpointValue({ base: true, sm: false });

  return (
    <Flex justifyContent={"end"}>
      <Box width={"100%"} justifyContent={"space-between"} display={"flex"}>
        <Box display={"flex"} alignItems={"center"} margin={"auto 0px"}>
          <GiRaiseZombie fontSize={"40px"} />
          <Text verticalAlign={"middle"} fontWeight={"800"} fontSize={"35px"}>
            Marc
          </Text>
        </Box>{" "}
        <Button
          borderRadius="45px"
          p={"0px"}
          bg="bg"
          color={"primary"}
          _hover={{ transform: "scale(1.1)" }}
          onClick={onOpen}
        >
          <RiMenu3Fill fontSize={"40px"} />
        </Button>
      </Box>
      <Drawer
        size={movilView ? "100%" : "xs"}
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent sx={{ backgroundColor: "bg", width: "100%" }}>
          <DrawerCloseButton />
          <DrawerHeader sx={{ maxHeight: "300px" }}>
            {" "}
            <GiRaiseZombie fontSize={"40px"} />
          </DrawerHeader>
          <DrawerBody sx={{ padding: "8px 0px" }}>
            {routes.map((itemRout) => {
              return (
                <Box
                  onClick={() => {
                    props.swiperRef.slideTo(itemRout.id, 1000, true);
                    setTimeout(onClose, 500);
                  }}
                  key={itemRout.id}
                  sx={{ cursor: "pointer" }}
                >
                  <Text
                    p={"10px 2px"}
                    backgroundColor={
                      soldOutProduct === itemRout.id ? "buttonColor" : "bg"
                    }
                    transition={"background-color 0.1s linear"}
                    borderColor={"secondary"}
                    textAlign={"center"}
                    textStyle={"h5"}
                  >
                    {itemRout.route}
                  </Text>
                </Box>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default DrawerP;
