import { lazy, Suspense } from "react"
import { Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

const TextSphere = lazy(() => import("../TextSphere"))

const SkillCard = ({ skill, index, animateSkill, activeIndex, heightParent }) => {
  const active = activeIndex === index

  //Style settings
  const { colors } = useTheme()
  const color = useColorModeValue(colors.brand[100], colors.brand[200])

  return (
    <AnimatePresence>
      <Stack
        key={index}
        alignItems={"center"}
        as={motion.div}
        direction={"row"}
        justifyContent={"space-between"}
        marginTop={"0px !important"}
        variants={animateSkill}
        width={"100%"}
      >
        <Text
          color={active ? `${color}` : "transparent"}
          display={"inline-block"}
          height={"100%"}
          sx={{ WebkitTextStroke: active ? "none" : `1px ${color}` }}
          textAlign={"center"}
          textStyle={"h2"}
          transitionDelay={"0s, 0s"}
          transitionDuration={".5s, .5s"}
          transitionProperty={"color, opacity"}
          transitionTimingFunction={"ease, ease"}
        >
          {skill.type}
        </Text>
      </Stack>
      {active && (
        <Suspense>
          <TextSphere activeIndex={active} height={heightParent} tags={skill.list} />
        </Suspense>
      )}
    </AnimatePresence>
  )
}

export default SkillCard

{
}
