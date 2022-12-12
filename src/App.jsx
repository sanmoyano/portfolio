import { Button, Stack, Text, useColorMode, useColorModeValue, useTheme } from "@chakra-ui/react";

import TextColorChange from "./TextColorChange";
const App = () => {
    const { toggleColorMode } = useColorMode();

    const colorChange = useColorModeValue("brand.200", "brand.100");

    return (
        <Stack>
            <Text fontSize={"4rem"}>App</Text>
            <Text color={colorChange} fontSize={"4rem"} textStyle={"h1"}>
                Cambio color
            </Text>
            <TextColorChange text={"Componente TextColorChange"} />
            <Button onClick={toggleColorMode}>CHANGE</Button>
        </Stack>
    );
};

export default App;
