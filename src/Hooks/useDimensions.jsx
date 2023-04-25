import { useState, useEffect } from "react"

const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }

    updateDimensions()

    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [ref])

  return dimensions
}

export default useDimensions
