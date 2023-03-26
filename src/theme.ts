import { extendTheme, keyframes } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { StyleFunctionProps } from "@chakra-ui/styled-system"

import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"

const floatingText = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
  `

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body, #root": {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontSize: "62.5%",
        bgColor: mode("white", "black")(props),
        color: mode("black", "white")(props),
        transitionProperty: "background-color",
        transitionDuration: ".5s",
        scrollBehavior: "smooth",
      },
    }),
  },
  colors: {
    black: "#0d0d0d",
    white: "#f5f5f5",
    green: "#CAF825",
    red: "#EE3442",
  },

  textStyles: {
    sectionTitle: {
      fontFamily: "neusa-next-std-wide",
      fontWeight: 700,
      fontSize: { base: "3.5rem", md: "11rem", lg: "12rem" },
      letterSpacing: 1,
      transform: "scaleY(.8)",
      textTransform: "uppercase",
      lineHeight: 0.8,
    },
    paragraph: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "1.6rem",
      letterSpacing: 1,
    },
    paragraphPhrases: {
      fontSize: { base: "5rem", md: "8rem" },
      fontFamily: "Roboto",
    },
    navLink: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "1.6rem",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    quotes: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "1.6rem",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    marquee: {
      fontFamily: "neusa-next-std-wide",
      fontWeight: 700,
      fontSize: { base: "3.5rem", md: "11rem", lg: "6rem" },
      letterSpacing: 1,
      transform: { base: "scaleY(.8)", lg: "scaleX(.8)" },
      textTransform: "uppercase",
      lineHeight: 0.8,
    },
    logo: {
      fontFamily: "neusa-next-std-wide",
      fontWeight: 700,
      fontSize: { base: "2rem", md: "4rem" },
      letterSpacing: 1,
      transform: "scaleY(.8)",
    },
  },
  components: {
    Divider: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          borderWidth: 2,
          borderColor: mode("red", "green")(props),
          opacity: 1,
        }),
      },
    },
  },
})
