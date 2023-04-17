import { useState, useEffect } from "react"
import { useInView } from "framer-motion"

const useIsInView = (ref) => {
  const [isViewed, setViewed] = useState(ref)

  const isView = useInView(isViewed)

  useEffect(() => {
    const updateViewed = () => {
      if (isViewed) {
        setViewed(isViewed)
      }
    }

    updateViewed()
  }, isViewed)

  return isView
}

export default useIsInView
