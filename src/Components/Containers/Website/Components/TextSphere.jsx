import { useEffect, useState, useRef } from "react"

import { wordSphere } from "../Utils/wordSphere"

const TextSphere = ({ listText }) => {
  const CANVAS = useRef()
  const [id, setId] = useState({ id: "" })
  const counts = [1, 2, 4, 5, 4, 2, 1]

  const options = {
    tilt: Math.PI / 9,
    initialVelocityX: 0.09,
    initialVelocityY: 0.09,
    initialRotationX: Math.PI * 0.14,
    initialRotationZ: 0,
  }

  useEffect(() => {
    if (CANVAS.current) {
      setId({ id: CANVAS.current })
    }
  }, [])

  useEffect(() => {
    if (id.id) {
      wordSphere(id.id, listText, counts, options)
    }
  }, [id.id])

  return <canvas ref={CANVAS} id={"canvas"} style={{ backgroundColor: "red" }} />
}

export default TextSphere
