import { motion } from "framer-motion"
import Gaming from "./Gaming"

const pageVariants = {
  hidden: {
      opacity: 0,
      x: "100vw"
  }, 
  visible: {
      opacity: 1,
      x: 0,
      transition: {
          duration: 1.3,
          when: "beforeChildren",
          staggerChildren: 1
      }
  },
  exit: {
      x: "-100vw",
      opacity: .4,
      transition: {
          duration: 1.3
      }
  }
}
const Game = () => {

  return (
    <motion.main variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        <Gaming />
    </motion.main>
  )
}

export default Game