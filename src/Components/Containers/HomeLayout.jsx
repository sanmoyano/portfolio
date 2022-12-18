import { Button, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

const HomeLayout = () => {
    const changeColor = useColorModeValue("brand.200", "brand.100");

    return (
        <>
            <Text textStyle={"robotos"}>Roboto 400</Text>
            <Text fontWeight={500} textStyle={"robotos"}>
                Roboto 500
            </Text>
            <Text fontWeight={700} textStyle={"robotos"}>
                Roboto 700
            </Text>
            <Text fontWeight={900} textStyle={"robotos"}>
                Roboto 900
            </Text>
            <Text color={changeColor} fontWeight={700} textStyle={"neusa"}>
                Neusa, PROJECTS
            </Text>
        </>
    );
};

export default HomeLayout;
