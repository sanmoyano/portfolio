import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Tilt from "react-parallax-tilt"

const Section4 = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)")

  return (
    <Box
      height={{ base: "150px", md: "350px" }}
      overflow={"hidden"}
      sx={{ display: "grid", placeContent: "center" }}
    >
      <Link to="/projects">
        <Tilt
          scale={isDesktop[0] ? 1.2 : 1}
          tiltEnable={isDesktop[0] ? true : false}
          transitionSpeed={2500}
        >
          <Box p={6} width={"100%"}>
            <Text textStyle={"neusaBoldUpperTitle"}>Projects</Text>
          </Box>
        </Tilt>
      </Link>
    </Box>
  )
}

export default Section4
