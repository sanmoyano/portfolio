import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Tilt from "react-parallax-tilt"

import { TextTitles, Tilting } from "../Decorators"

const Section4 = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)")

  return (
    <Box
      height={{ base: "150px", md: "350px" }}
      overflow={"hidden"}
      sx={{ display: "grid", placeContent: "center" }}
    >
      <Link to="/projects">
        <Tilting enable={isDesktop[0] ? true : false} scale={isDesktop[0] ? 1.2 : 1}>
          <TextTitles content={"projects"} px={2} textStyle={"neusaBoldUpperTitle"} />
        </Tilting>
      </Link>
    </Box>
  )
}

export default Section4
