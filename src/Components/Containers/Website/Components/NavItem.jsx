import { useState } from "react"
import { Box, Stack, Text, useTheme, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

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
      as={motion.div}
      to={!route ? "" : route}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Stack alignItems={"center"} direction={"row"}>
        <motion.div animate={isHovered ? "hover" : "initial"} variants={variants}>
          <Box boxSize={"20px"} sx={{ display: "flex", alignItems: "center" }}>
            <svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_41_56)">
                <path
                  d="M12.3144 10.2312L14 0L15.6856 10.2312C15.862 11.3008 16.6992 12.138 17.7688 12.3144L28 14L17.7688 15.6856C16.6992 15.862 15.862 16.6992 15.6856 17.7688L14 28L12.3144 17.7688C12.138 16.6992 11.3008 15.862 10.2312 15.6856L0 14L10.2312 12.3144C11.3008 12.138 12.138 11.3008 12.3144 10.2312Z"
                  fill={fill}
                />
              </g>
              <defs>
                <clipPath id="clip0_41_56">
                  <rect fill="white" height="30" width="30" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </motion.div>
        <Text textStyle={"robotoBoldWhite"}>{item}</Text>
      </Stack>
    </Link>
  )
}

export default NavItem
