import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { ParallaxContainer, Titles } from "../../Components"
import { floatAnimation } from "../../Utils/floatAnimation"

const Projects = () => {
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
          <Titles
            content={"projects"}
            float={floatAnimation}
            textStyle={"title"}
            tiltingScale={1.2}
          />
        </Link>
      </Box>
    </ParallaxContainer>
  )
}

export default Projects
