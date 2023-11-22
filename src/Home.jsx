import { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataContext from "./context/contextProvider";


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

const playersVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * .1, duration: i * 1, type: "tween"
        }
    })
}
const errorVariants = {
    hidden: {
       x: -200,
       opacity: 0
    },
    visible: {
       x: 0,
       opacity: 1,
       transition: {
        type:"tween", duration: 1.5
       }
    }
}
const sectionVariants = {
    hover:{scale: .9, transition: {duration: .5}},
    tap:{scale: .8}
}
const Home = () => { 
    
    const {players, error, issue, loading} = useContext(DataContext)

  return (
    <motion.main className="flex w-full sm:gap-8" animate="visible" initial="hidden" exit="exit" variants={pageVariants}>
        <div className="flex flex-col justify-between flex-grow">
            <section className="flex flex-wrap w-full gap-4 pb-2 text-center place-content-center sm:justify-between">
                <motion.div className="bg-red-400 h-44 w-[300px] lg:max-w-[400px] rounded-xl" variants={sectionVariants} whileHover="hover" whileTap="tap" >
                <Link to={"/gaming"}>
                    <h2 className="pt-4 font-medium">GAME</h2>
                    <p className="py-6">total players: 2000+</p>
                    <button>ENTER</button>
                </Link>
                </motion.div>
                    <motion.div className="bg-red-400 h-44 w-[300px] lg:max-w-[400px] rounded-xl" variants={sectionVariants} whileHover="hover" whileTap="tap" >
                    <Link to={"/market"}> 
                        <h2 className="pt-4 font-medium">MARKET</h2>
                        <p className="py-6">total products: 900+</p>
                        <button>ENTER</button>
                    </Link>
                    </motion.div>
                    <motion.div className="bg-red-400 h-44 w-[300px] lg:max-w-[400px] rounded-xl" variants={sectionVariants} whileHover="hover" whileTap="tap" >
                    <Link to={"/blogs"}>
                        <h2 className="pt-4 font-medium">SOCIETY</h2>
                        <p className="py-6">total blogs: 900+</p>
                        <button>ENTER</button>
                    </Link>
                    </motion.div>
                    <motion.div className="bg-red-400 h-44 w-[300px] lg:max-w-[400px] rounded-xl" variants={sectionVariants} whileHover="hover" whileTap="tap" >
                    <Link to={"/traffic"}>
                        <h2 className="pt-4 font-medium">TRAFFIC</h2>
                        <p className="py-6">under construction</p>
                        <button>ENTER</button>
                    </Link>
                    </motion.div>
                    {/*   <div></div>  Bank*/}
            </section>
            {/* <section className="flex gap-16 place-content-center">
                <div className="w-56 h-20 bg-red-500">

                </div>
            </section> */}
            <section>
                <div className="flex justify-between py-4">
                    <p>TOP PLAYERS</p>
                    <Link to={"playerlist"}>
                        <p className="pr-4">view all <FaArrowRight className="inline w-3 h-3 text-gray-600" /></p>
                    </Link>
                </div>
                <ul className="flex justify-between" >
                    <li className="pl-4">No</li>
                    <li>Name</li>
                    <li className="hidden sm:block">Points</li>
                    <li className="flex items-center pr-6 text-center">Rank</li>
                </ul>
                <hr />     
                {loading && error ? (<motion.p className="p-2 text-red-700" variants={errorVariants}>{issue && <span className="pl-4"><FaExclamationCircle className="inline w-5 h-5"/> <em className="pl-1">{issue}</em></span>}</motion.p> ): loading && !error ? (<p>Loading...</p>) : (
                    players && players.map((player, i) => (
                    <ol>
                        {/* limiting the amount of players to 5 */}
                        {i < 5 && 
                        <motion.li className="flex justify-between p-4"  variants={playersVariants} custom={i} key={player.id}>
                            <p>{player.id}</p>
                            <p className=" w-36">{player.name}</p>
                            <p className="hidden w-24 sm:flex ">2000+</p>
                            <p className="pr-4">{player.id}</p>
                        </motion.li>
                        }
                        <hr />
                    </ol>
                )))}           
            </section>
        </div>
       
    </motion.main>
  )
}

export default Home