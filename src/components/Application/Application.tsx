import {
  Box,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

//Swiper
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { challenges } from "../../data/challenges";
import { mySkills } from "../../data/skills";

//Componnets
import AboutMe from "../AboutMe/AboutMe";
import Nav from "../commons/Nav/Nav";
import Contact from "../Contact/Contact";
import Presentation from "../Presentation/Presentation";
import Challenges from "../Projects/commons/Challenges/Challenges";
import SKILLS from "../Projects/commons/Skills/Skills";
import Projects from "../Projects/Projects";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

//Redux
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setchallengePeerYear,
  setSkillsPeerCategory,
} from "../../redux/projectsSlice/projectsSlice";
import { setRoutes } from "../../redux/routesSlice/routesSlice";
import { changeSliderPosition } from "../../redux/sliderPositionSlice/sliderPositionSlice";
import { routes, routesMobile } from "../../routes/routes";

const Application = () => {
  const dispatch = useDispatch();
  const movilView: boolean = useBreakpointValue({ base: true, xl: false });
  const swiper = useSwiper();
  const [my_swiper, set_my_swiper] = useState(swiper);

  useEffect(() => {
    dispatch(setSkillsPeerCategory(mySkills));
    dispatch(setchallengePeerYear(challenges));
  }, []);

  useEffect(() => {
    if (movilView) {
      dispatch(setRoutes(routesMobile));
    } else {
      dispatch(setRoutes(routes));
    }
  }, [movilView]);

  return (
    <Grid
      padding={{ base: "0px 20px", xl: "0px" }}
      w={"100vw"}
      height={"100vh"}
      templateColumns={{ base: "2fr", xl: "1fr 7fr 1fr" }}
    >
      {" "}
      {!movilView ? (
        <>
          <GridItem maxW={"230px"}>
            {" "}
            <SocialNetworks />
          </GridItem>
        </>
      ) : (
        <> </>
      )}
      <GridItem sx={{ height: "100vh" }}>
        <Box>
          {movilView && (
            <Box h={"10%"}>
              <Nav swiperRef={my_swiper} />
            </Box>
          )}{" "}
        </Box>
        <Box
          m={"0px auto"}
          height={movilView ? "90%" : "100%"}
          sx={{
            ".mySwiper": {
              height: `100%`,
              ".swiper-pagination": { display: "none" },
              ".swiper-slide": {
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
              },
            },
          }}
        >
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
            onActiveIndexChange={(swiper) => {
              dispatch(changeSliderPosition(swiper.activeIndex));
            }}
          >
            <SwiperSlide>
              <Presentation />
            </SwiperSlide>
            <SwiperSlide>
              <AboutMe />
            </SwiperSlide>
            {!movilView ? (
              <>
                {" "}
                <SwiperSlide>
                  <Flex
                    justifyContent={"center"}
                    height={"100%"}
                    width={"100%"}
                  >
                    <Projects />
                  </Flex>
                </SwiperSlide>
              </>
            ) : (
              <>
                {" "}
                <SwiperSlide>
                  <SKILLS />
                </SwiperSlide>
                <SwiperSlide>
                  <Challenges />
                </SwiperSlide>
              </>
            )}

            <SwiperSlide>
              <Contact />
            </SwiperSlide>
          </Swiper>
        </Box>
      </GridItem>
      {!movilView ? (
        <>
          {" "}
          <GridItem maxW={"230px"}>
            {" "}
            <Nav swiperRef={my_swiper} />
          </GridItem>
        </>
      ) : (
        <></>
      )}
    </Grid>
  );
};

/* 
<GridItem>
{" "}
<Box
  bg={{ base: "buttonColor", xl: "" }}
  zIndex={"999"}
  p={"20px 0px"}
  position={"fixed"}
  top={"0"}
  w={"100%"}
>
  <Flex w={"90%"} m={"0px auto"}>
    {" "}
    <Box flexGrow={1}>
      <Nav swiperRef={my_swiper} />
    </Box>
    <Box flexGrow={1}>
      <SocialNetworks />
    </Box>
  </Flex>
</Box>
<Box width={"90%"} m={"0px auto"}>
  <Box m={"200px 0px"}>
    <Presentation />
  </Box>
  <Box m={"200px 0px"}>
    {" "}
    <AboutMe />
  </Box>
  <Box m={"200px 0px"}>
    <Projects />
  </Box>
  <Box m={"200px 0px"}>
    <Contact />
  </Box>
</Box>
</GridItem> */

export default Application;
