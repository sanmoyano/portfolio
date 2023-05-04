import { Grid } from "@chakra-ui/react"
import React from "react"
import { motion } from "framer-motion"

const GridContainer = ({ children, gap, columns, width }) => {
  return (
    <Grid as={motion.div} gap={gap} templateColumns={columns} width={width}>
      {children}
    </Grid>
  )
}

export default GridContainer
