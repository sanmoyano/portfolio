import { Stack } from "@chakra-ui/react"

const SpacedContainer = ({ children }) => {
  return (
    <Stack alignItems={"center"} height={"100%"} paddingInline={{ base: 6, lg: 12 }} width={"100%"}>
      {children}
    </Stack>
  )
}

export default SpacedContainer
