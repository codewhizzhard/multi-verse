import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const pageVariants = {
  hidden: {
      opacity: 0,
      x: "100vw"
  }, 
  visible: {
      opacity: 1,
      x: 0,
      transition: {
          duration: 1.2,
          when: "beforeChildren"
      }
  },
  exit: {
      x: "-100vw",
      opacity: .4,
      transition: {
          duration: 1.2
      }
  }
}

const About = () => {
    const navigate = useNavigate()
  return (
    <motion.main className="p-4 bg-orange-100 " variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        <h2 className="py-4 text-2xl font-bold text-center">Welcome to MULTI VERSE</h2>
        <p className="">This is a platform for many things, gaming, marketing, reading, and so many features which will be encoutered during your survey around it, We know you know, you can not properly run and do stuffs needed during your survey but do not worry, we <strong>GAT</strong> you, we know you won't, so we have provided you an ai assistance which will guide you during your survey</p>
        <p>In the <em>HOME</em> section, you are provided with so many activities, you can enter into the <em>GAMING</em>, <em>MARKET</em>, <em>BLOGS</em> <em>TRAFFIC</em> section where our ai assistance we guide you on how to go about once entered, or you can either <strong title="click to view players">view all</strong> the players we have in the <em>GAMING</em> section, viewing this first before going to the <em>GAMING</em> section provides you with different options of players when you want to play the game</p>
        <dl>
            <dt className="pt-2 font-semibold text-center text-gray-600">GAMING</dt>
            <dd>GAMING is so much fun to do, this does not make the user to be bored, knowing this, <em>MULTI VERSE</em> has come to your aid to help ease yor boredome. </dd>
            <dt className="pt-2 font-semibold text-center text-gray-600">MARKET</dt>
            <dd>In this section, you can buy and sell products, though the buying and selling is still under construction, but you can view the product and the category of the product either it is under the <strong>physical</strong> or the <strong>digital</strong> category, we have about <em>1000</em> products</dd>
            <dt className="pt-2 font-semibold text-center text-gray-600">BLOGS</dt>
            <dd>This section gives room for updating the users with news about <em>games</em>, <em>programming</em>, <em>love</em>, and <em>math</em> visit to read about these things, we also have <em>1000</em> of blogs you can read, the reactions and likes to these blogs is still under construction.</dd>
            <dt className="pt-2 font-semibold text-center text-gray-600">TRAFFIC</dt>
            <dd>still under construction</dd>
        </dl>
    </motion.main>
  )
}

export default About