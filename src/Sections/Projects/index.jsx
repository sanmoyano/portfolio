import { Box, useMediaQuery } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { ParallaxContainer, TextTitles, Tilting } from "../../Components"

const Projects = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)")

  return (
    <ParallaxContainer>
      <Box
        height={{ base: "150px", md: "350px" }}
        id={4}
        overflow={"hidden"}
        sx={{ display: "grid", placeContent: "center" }}
        width={"100%"}
      >
        <Link to="/projects">
          <Tilting enable={isDesktop[0] ? true : false} scale={isDesktop[0] ? 1.2 : 1}>
            <TextTitles content={"projects"} px={2} textStyle={"h1"} />
          </Tilting>
        </Link>
      </Box>
    </ParallaxContainer>
  )
}

export default Projects