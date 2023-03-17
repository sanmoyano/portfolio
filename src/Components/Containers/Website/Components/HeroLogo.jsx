import { Box, Container, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"
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
    <Container centerContent maxW={"xl"}>
      <Box>
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
