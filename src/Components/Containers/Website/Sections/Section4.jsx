import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Tilt from "react-parallax-tilt"

const Section4 = () => {
  const isMobile = useMediaQuery("(max-width: 320px)")

  console.log(isMobile[0])

  return (
    <Box
      height={{ base: "150px", md: "350px" }}
      overflow={"hidden"}
      sx={{ display: "grid", placeContent: "center" }}
    >
      <Link to="/projects">
        <Tilt scale={1.2} transitionSpeed={2500}>
          <Box p={6} width={"100%"}>
            <Text textStyle={"neusaBoldUpperTitle"}>Projects</Text>
          </Box>
        </Tilt>
      </Link>
    </Box>
  )
}

export default Section4
