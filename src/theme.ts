import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { StyleFunctionProps } from "@chakra-ui/styled-system"

import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"
// import "https://use.typekit.net/nvb0lhh.css" apoket Dyana Weissman

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
  fonts: {
    heading: `"apotek-extrawide", sans-serif`,
    body: `"Roboto", sans-serif`,
  },
  textStyles: {
    h1: {
      fontFamily: `"apotek-extrawide", sans-serif`,
      fontWeight: 700,
      fontSize: "12rem",
      textTransform: "uppercase",
      lineHeight: 1,
    },
    caption: {
      fontSize: "10rem",
    },
    paragraph: {
      fontSize: "calc(2.6rem * 1.618)",
      textTransform: "uppercase",
      lineHeight: 1,
    },
    navigation: {
      fontFamily: `"apotek-extrawide", sans-serif`,
      fontWeight: 700,
      fontSize: "2rem",
      textTransform: "uppercase",
      lineHeight: 1,
    },
    quotes: {
      fontWeight: 500,
      fontSize: "1.6rem",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    logo: {
      fontFamily: `"apotek-extrawide", sans-serif`,
      fontWeight: 700,
      fontSize: "4rem",
      letterSpacing: 1,
    },
    footer: {
      fontWeight: 400,
      fontSize: "1.4rem",
      letterSpacing: 1,
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
