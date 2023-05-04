import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { ParallaxContainer, Titles } from "../../Components"
import { floatAnimation } from "../../Utils/floatAnimation"

const Projects = () => {
  return (
    <ParallaxContainer>
      <AnimatePresence id={4}>
        <Box
          // height={{ base: "150px", md: "350px" }}
          height={"40vh"}
          id={"projects"}
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
      </AnimatePresence>
    </ParallaxContainer>
  )
}

export default Projects
