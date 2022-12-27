import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useSelector } from "react-redux";
import { Pagination } from "swiper";
import { selectChallengesPeerYear } from "../../../../redux/projectsSlice/projectsSlice";
import ChallengesPerYear from "./ChallengesPerYear/ChallengesPerYear";

const Challenges = () => {
  const movileView = useBreakpointValue({ base: true, xl: false });
  const swiperWidth = useBreakpointValue({
    base: "90vw !important",
    xl: "620px !important ",
  });
  const challengesPerYear = useSelector(selectChallengesPeerYear);

  return (
    <Box
      className="aqui"
      display={"flex"}
      justifyContent={movileView ? "left" : "right"}
      h={"100%"}
      alignItems={"center"}
    >
      <Box>
        <Text
          textAlign={useBreakpointValue({
            base: "left",
            xl: "right",
          })}
          textStyle="h4"
        >
          CHALLENGES
        </Text>
        <Text
          textAlign={useBreakpointValue({
            base: "left",
            xl: "right",
          })}
          color={"secondary"}
          textStyle={"caption"}
        >
          Click on a challenge to see details and associated skills.
        </Text>

        <Box
          sx={{
            ".mySwiper": {
              width: "100% !important",
              maxWidth: `${swiperWidth}`,
              height: "auto",
              paddingBottom: "100px",
              marginRight: "0px",
              position: "relative",
              ".swiper-slide": {
                width: "100% !important",
                height: "100% !important",
              },
              ".swiper-pagination": {
                display: "block",
                position: "absolute",
                bottom: "7%",

                ".swiper-pagination-bullet": {
                  backgroundColor: "secondary",
                },
              },
              ".swiper-button-prev": {
                position: "absolute",
                left: "1%",
                width: "50px",
                top: "90%",
                background: "buttonColor",
                fontSize: "16px",
                borderRadius: "5px",
                zIndex: "100",
                "::after": {
                  fontSize: "24px",
                  color: "primary",
                },
              },
              ".swiper-button-next": {
                zIndex: "100",
                position: "absolute",
                right: "1%",
                width: "50px",
                top: "90%",
                background: "buttonColor",
                fontSize: "16px",
                borderRadius: "5px",
                "::after": {
                  fontSize: "24px",
                  color: "primary",
                },
              },
            },
          }}
          mt={"40px"}
        >
          <Swiper
            pagination={true}
            navigation={true}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {challengesPerYear.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Box width={"100%"} h={"100%"}>
                    <ChallengesPerYear challengesPerYear={item} />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Challenges;
