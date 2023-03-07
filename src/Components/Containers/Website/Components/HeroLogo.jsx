import { useState } from "react"
import { Box, Image, useColorModeValue, Skeleton } from "@chakra-ui/react"
import { motion } from "framer-motion"

const HeroLogo = ({ loadingHandlersImage }) => {
  const { imageLoading, setImageLoading } = loadingHandlersImage
  const imageLoaded = () => {
    setTimeout(() => setImageLoading(true), 1000)
  }
  const logo = useColorModeValue(
    "../../../../../assets/logo_red.svg",
    "../../../../../assets/logo_green.svg",
  )

  return (
    <Box
      height={"100%"}
      maxW={"350px"}
      sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
    >
      <Image
        animate={{
          height: imageLoading ? "100%" : "auto",
          opacity: imageLoading ? 1 : 0,
        }}
        as={motion.img}
        initial={{ height: "100%", opacity: 0 }}
        src={logo}
        transition={
          ({ height: { delay: 0, duration: 0.4 } }, { opacity: { delay: 0.5, duration: 0.4 } })
        }
        width="100%"
        onLoad={imageLoaded}
      />
    </Box>
  )
}

export default HeroLogo
