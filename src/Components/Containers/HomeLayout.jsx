import { Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Section1 } from "./Website/Sections";

const HomeLayout = () => {
    const changeColor = useColorModeValue("brand.200", "brand.100");

    const { colorMode } = useColorMode();

    const colorChange = () => {
        if (colorMode === "dark") {
            return "robotoBoldRed";
        } else {
            return "robotoBoldGreen";
        }
    };

    return (
        <>
            <Section1 />
            <Text textStyle={"robotos"}>Roboto 400</Text>
            <Text fontWeight={500} textStyle={"robotos"}>
                Roboto 500
            </Text>
            <Text
                fontWeight={700}
                textStyle={colorMode === "dark" ? "robotoBoldRed" : "robotoBoldGreen"}
            >
                Roboto 700
            </Text>
            <Text fontWeight={900} textStyle={colorChange}>
                Roboto 900
            </Text>
            <Text color={changeColor} fontWeight={700} textStyle={"neusa"}>
                Neusa, PROJECTS
            </Text>
        </>
    );
};

export default HomeLayout;
