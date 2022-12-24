import { Button, Stack, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { NavItem } from "./";

const NavBar = () => {
    const { toggleColorMode } = useColorMode();
    const navItems = ["skills", "about", "contact"];

    return (
        <Stack alignItems={"center"} direction={"row"} marginBlock={20} spacing={10}>
            <Button onClick={toggleColorMode}>color</Button>
            <Link to={"/"}>
                <Text textStyle={"robotoBoldWhite"}>home</Text>
            </Link>
            <Link to={"/projects"}>
                <Text textStyle={"robotoBoldWhite"}>projects</Text>
            </Link>
            {navItems.map((item, i) => (
                <NavItem key={i} item={item} />
            ))}
        </Stack>
    );
};

export default NavBar;
