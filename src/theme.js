import { ColorModeContext, ColorModeProvider, extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
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
    textStyles: (props) => ({
        title: {
            color: props.colorMode === "dark" ? "brand.100" : "brand.200",
            fontSize: "4rem",
        },
    }),
});
