import { Link, Stack } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Tilting } from ".."

const ContactIcons = ({ icons }) => {
  return (
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} width={"200px"}>
      {icons?.map((icon, i) => (
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
