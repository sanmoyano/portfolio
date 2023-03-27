import { useState } from "react"
import { Stack, Text, useTheme, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { StarIcon } from "../Decorators"

const NavItem = ({ item, route }) => {
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.black}`, `${colors.white}`)

  const variants = {
    hover: {
      rotate: 360,
    },
    initial: {
      rotate: 0,
    },
  }

  const [isHovered, setHovered] = useState(false)

  return (
    <Link
      to={!route ? "" : route}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        display={{ base: item === "contact" ? "none" : "flex", lg: "flex" }}
      >
        <motion.div animate={isHovered ? "hover" : "initial"} variants={variants}>
          <StarIcon fill={fill} />
        </motion.div>
        <Text textStyle={"navLink"}>{item}</Text>
      </Stack>
    </Link>
  )
}

export default NavItem
