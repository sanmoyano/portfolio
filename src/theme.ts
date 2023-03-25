import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { position, StyleFunctionProps } from '@chakra-ui/styled-system'

import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"

// const breakpoints = {
//   sm: '30em',//480px
//   md: '48em',//786px
//   lg: '62em',//992px
//   xl: '80em',//1280
//   '2xl': '96em',//1536
// }

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
        color: mode("black","white")(props),
        transitionProperty: "background-color",
        transitionDuration: ".5s",
        scrollBehavior:"smooth",
      },
    }),
  },
  colors: {
    black: "#0d0d0d",
    white: "#f5f5f5",
    green: "#CAF825",
    red: "#EE3442"
  },
  
  textStyles: {
    neusa: {
      fontFamily: "neusa-next-std-wide",
      fontWeight: 700,
      fontSize: "5rem",
      letterSpacing: 1,
      transform: "scaleY(.8)"
    },
    roboto: {
      fontSize: { base: "4rem",  lg:"8rem" },
      fontFamily: "Roboto"
    },
    robotoBold: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "1.6rem",
      textTransform: "uppercase",
      letterSpacing: 2
    },
    robotoText : {
      fontFamily:"Roboto",
      fontWeight:400,
      fontSize:"1.6rem",
      letterSpacing:1
    },
    neusaBoldUpper: {
      fontFamily:"neusa-next-std-wide",
      fontWeight: 700,
      fontSize: {base:"4.5rem", md:"11rem", lg:"6rem"},
      letterSpacing: 1,
      transform: {base:"scaleY(.8)", lg:"scaleX(.8)"},
      textTransform:"uppercase",
      lineHeight:.8
     
    },
    neusaBoldUpperTitle : {
      fontFamily:"neusa-next-std-wide",
      fontWeight: 700,
      fontSize: {base:"4.5rem", md:"11rem", lg:"12rem"},
      letterSpacing: 1,
      transform: "scaleY(.8)",
      textTransform:"uppercase",
      lineHeight:.8
    }
    
  },
  components: {
    Divider: {
      variants: {
        solid:(props: StyleFunctionProps) => ({
          borderWidth:2,
          borderColor: mode("red", "green")(props),
          opacity:1
        })
      },
    },
  },
})
