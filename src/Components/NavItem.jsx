import { useState } from "react"
import { Stack, Text, useTheme, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { StarIcon } from "./"

const NavItem = ({ item, route }) => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.black}`, `${colors.white}`)

  const [isHovered, setHovered] = useState(false)

  return (
    <Link
      to={route && route}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        display={{ base: item === "contact" ? "none" : "flex", lg: "flex" }}
      >
        <StarIcon fill={fill} isRotate={isHovered} />
        <Text textStyle={"navigation"}>{item}</Text>
      </Stack>
    </Link>
  )
}

export default NavItem
