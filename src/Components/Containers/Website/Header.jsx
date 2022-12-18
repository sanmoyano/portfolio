import { Button, Stack, useColorMode } from "@chakra-ui/react";

import { NavBar } from "./Components";

const Header = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            paddingInline={24}
            width={"100%"}
        >
            <NavBar />
            <Button onClick={toggleColorMode}>color</Button>
        </Stack>
    );
};

export default Header;
