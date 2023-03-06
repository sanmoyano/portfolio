import { useState } from "react"
import { Box, Stack, Text, useTheme, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { StarIcon } from "../Decorators"

const NavItem = ({ item, route }) => {
  const { colors } = useTheme()
  const fill = useColorModeValue("black", "white")

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
      <Stack alignItems={"center"} direction={"row"}>
        <motion.div animate={isHovered ? "hover" : "initial"} variants={variants}>
          <StarIcon fill={fill} />
        </motion.div>
        <Text textStyle={"robotoBoldWhite"}>{item}</Text>
      </Stack>
    </Link>
  )
}

export default NavItem
