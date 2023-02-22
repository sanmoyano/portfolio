import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { Stack, Text, useColorModeValue } from "@chakra-ui/react"

const Box = () => {
  const [size, set] = useState(0.5)
  const [hidden, setVisible] = useState(false)

  return (
    <mesh scale={size * 2}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html
        occlude
        transform
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        style={{
          transition: "all 0.2s",
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`,
          background: "red",
        }}
        onOcclude={setVisible}
      >
        {/* <Text>ACA ESTA</Text> */}
        <span>Size</span>
      </Html>
    </mesh>
  )
}

const Section1 = () => {
  return (
    <Canvas camera={{ fov: 25 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
      <OrbitControls />
    </Canvas>
  )
}

export default Section1
