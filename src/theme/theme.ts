import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "320px",
  sm: "525px",
  md: "768px",
  lg: "1050px",
  xl: "1225px",
  "2xl": "1560px",
};

export const customColors = {
  background: {
    base: "#101014",
  },
  colorText: {
    secondary: "#9f9fa1",
    primary: "#ffffff",
  },
};

export const Container = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    width: "100% !important",
  },
  // Two variants: rounded and smooth
  variants: {
    smooth: {
      boxShadow: "md",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
});

export const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        bg: "#101014",
        bgSize: "700px",
        backgroundPositionX: "150px",
        fontSize: "14px",
        color: customColors.colorText.primary,
      },
      "*": {
        "&": {
          scrollbarColor: "#8f8e8e #D1D1D1",
          scrollbarWidth: "thin",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#8f8e8e ",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#D1D1D1 ",
          borderRadius: 1.5,
        },
        scrollbarWidth: "auto",
        scrollbarColor: "dappTemplate.light dappTemplate.dark.base",
      },
    },
  },
  fonts: {
    heading: "Heebo, sans-serif",
    body: "Heebo, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "1xl": "1.75rem",
    "2xl": "2.125rem",
    "3xl": "3.125rem",
    "4xl": "3.75rem",
  },
  colors: {
    secondary: "#9f9fa1",
    primary: "#ffffff",
    buttonColor: "rgb(37, 37, 48)",
    borderColor: "rgb(69, 69, 80)",
    bg: "#101014",
  },
  textStyles: {
    h5: {
      fontWeight: "200",
      fontSize: "1.1rem",
      textTransform: "uppercase",
    },
    h4: {
      // you can also use responsive styles
      fontWeight: "600",
      textTransform: "uppercase",
      fontSize: "2xl",
    },
    h1: {
      fontSize: { base: "50px", sm: "80px" },
      fontWeight: "600",
      lineHeight: "110%",
    },
    skillTitle: {
      fontSize: "1.1rem",
      fontFamily: `Heebo", sans-serif`,
      fontWeight: "200",
      textTransform: "uppercase",
      opacity: "0.7",
      verticalAlign: "middle",
    },
    caption: {
      fontWeight: "200",
      fontSize: "1.1rem",
    },
    text: {
      fontSize: { base: "16px", xl: "xl" },
      fontWeight: "200",
      verticalAlign: "middle",
    },
    subtitleChallenge: {
      fontSize: "1.1rem",
      lineHeight: "90%",
    },
  },
  components: {
    Container,
  },
});

import { defineStyleConfig } from "@chakra-ui/react";
