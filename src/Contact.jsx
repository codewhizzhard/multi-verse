import { motion } from "framer-motion"
import PlayerList from "./playerList"

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

const Contact = () => {
  return (
    <motion.main variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        Contact multi verse
        <p className="text-blue-600">still under construction, the company contact is still hidden for now it will soon be done with bear with <span>multi verse</span></p>
    </motion.main>
  )
}

export default Contact