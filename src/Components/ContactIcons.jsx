import { Link, Stack } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import { Tilting } from "./"

const ContactIcons = ({}) => {
  const icons = [
    {
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/santiago-moyano/",
    },
    {
      icon: faGithub,
      url: "https://github.com/sanmoyano",
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
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} width={"200px"}>
      {icons.map((icon, i) => (
        <Link key={i} href={icon.url} target={"_blank"}>
          <Tilting>
            <FontAwesomeIcon fontSize={"2.5rem"} icon={icon.icon} />
          </Tilting>
        </Link>
      ))}
    </Stack>
  )
}

export default ContactIcons
