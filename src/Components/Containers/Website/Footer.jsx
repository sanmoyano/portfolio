import { Grid, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedinIn,
  faTelegram,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

import { Logo } from "./Components"

const Footer = () => {
  const heart = useColorModeValue("🖤", "🤍")

  const icons = [
    {
      icon: faGithub,
      url: "https://github.com/sanmoyano",
    },
    {
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/santiago-moyano/",
    },
    {
      icon: faTelegram,
      url: "https://t.me/+5493517562121",
    },
    {
      icon: faWhatsapp,
      url: "https://wa.me/3517562121",
    },
    // {
    //   icon: faInstagram,
    //   url: "https://www.instagram.com/sanmoyano/?theme=dark",
    // },
  ]

  return (
    <Stack
      display={{ base: "none", md: "flex" }}
      justifyContent={"space-between"}
      paddingBlock={12}
      paddingInline={{ base: 6, md: 12 }}
      spacing={6}
      width={"100%"}
    >
      <Logo />
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Grid gap={2} templateColumns={"repeat(2, 1fr)"}>
          <Text fontSize={"1.4rem"} fontWeight={700} textStyle={"robotoText"}>
            <Link href={"https://www.linkedin.com/in/santiago-moyano/"} target={"_blank"}>
              Santiago Moyano
            </Link>
          </Text>
          <Text fontSize={"1.4rem"} textStyle={"robotoText"}>
            Front End Developer
          </Text>
          <Text fontSize={"1.4rem"} textStyle={"robotoText"}>
            Córdoba, Argentina
          </Text>
          <Text fontSize={"1.4rem"} fontWeight={700} textStyle={"robotoText"}>
            <Link href={"mailto:smoyano.di@gamil.com"}>smoyano.di@gmail.com</Link>
          </Text>
        </Grid>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          width={"200px"}
        >
          {icons.map((icon) => (
            <Link key={icon.icon} href={icon.url} target={"_blank"}>
              <FontAwesomeIcon fontSize={"2.5rem"} icon={icon.icon} />
            </Link>
          ))}
        </Stack>
      </Stack>
      <Text fontSize={"1rem"} textAlign={"center"} textStyle={"robotoText"}>
        {`2023 - Designed and developed with ${heart}.`}
      </Text>
    </Stack>
  )
}

export default Footer
