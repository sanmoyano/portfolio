import { Text, useColorModeValue } from "@chakra-ui/react";

const TextColorChange = ({ text }) => {
    const colorChange = useColorModeValue("brand.200", "brand.100");

    return (
        <Text color={colorChange} fontSize={"4rem"}>
            {text}
        </Text>
    );
};

export default TextColorChange;
