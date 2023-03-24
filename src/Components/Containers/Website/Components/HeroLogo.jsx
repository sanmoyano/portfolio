import { Box, Container, Image, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const HeroLogo = ({ loadingHandlersImage }) => {
  const { imageLoading, setImageLoading } = loadingHandlersImage
  const imageLoaded = () => {
    setTimeout(() => setImageLoading(true), 600)
  }
  const logo = useColorModeValue(
    "../../../../../assets/logo_red.svg",
    "../../../../../assets/logo_green.svg",
  )

  return (
    <Container centerContent height={"100%"} maxW={"xl"}>
      <Box sx={{ display: "grid", placeContent: "center", height: "100%", padding: 6 }}>
        <Image
          animate={{
            opacity: imageLoading ? 1 : 0,
          }}
          as={motion.img}
          initial={{ opacity: 0 }}
          src={logo}
          transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
          onLoad={imageLoaded}
        />
      </Box>
    </Container>
  )
}

export default HeroLogo
