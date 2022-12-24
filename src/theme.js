import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

export default extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
        disableTransitionOnChange: false,
    },
    styles: {
        global: (props) => ({
            "html, body, #root": {
                height: "100%",
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                fontSize: "62.5%",
                bgColor: props.colorMode === "dark" ? "black" : "white",
                color: props.colorMode === "dark" ? "white" : "black",
                transitionProperty: "background-color",
                transitionDuration: ".5s",
            },
        }),
    },
    colors: {
        black: "#0d0d0d",
        white: "#f5f5f5",
        brand: {
            100: "#CAF824",
            200: "#EE3442",
        },
    },
    textStyles: {
        robotos: {
            fontSize: "4rem",
            fontFamily: "Roboto",
        },
        neusa: {
            fontSize: "4rem",
            fontFamily: " neusa-next-std-wide",
        },
        robotoBoldWhite: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.6rem",
            textTransform: "uppercase",
            letterSpacing: 2,
        },
        robotoBoldGreen: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.6rem",
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "brand.200",
        },
        robotoBoldRed: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.6rem",
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "brand.100",
        },
        neusaBoldWhite: {
            fontFamily: "neusa-next-std-wide",
            fontWeight: 700,
            fontSize: "4rem",
            letterSpacing: 1,
            transform: "scaleY(.8)",
        },
    },
});
