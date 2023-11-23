import { useContext, useRef, useEffect } from "react"
import DataContext from "./context/contextProvider"
import { FaExclamationCircle, FaStar, FaCrown } from "react-icons/fa"
import { motion } from "framer-motion"
import points from "./points"
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

const listPlayerVariants = {
    hidden:{
        x: "100vw",
        opacity: 0
    },
    visible: {
        opacity: 1,
        x: 0, 
        transition: {
            type: "spring", stiffness: 100
        }}
}

const PlayerList = () => {


   const { players, loading, error, issue } = useContext(DataContext)
   /* const playerRef = useRef("")
   
    useEffect(() => {
        players.map((player) => playerRef.current = player.id)
        

    }, [players.map((player) => player.id)]) */
  return (
    <motion.main className="bg-red-400" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        <ul className="flex justify-between" >
            <li className="pl-4">No</li>
            <li>Name</li>
            <li className="hidden sm:block">Points</li>
            <li className="flex items-center pr-6 text-center">Rank</li>
        </ul>
        <hr />
    {loading && error ? (<p className="p-2 text-red-700">{issue && <span className="pl-4"><FaExclamationCircle className="inline w-5 h-5"/> <em className="pl-1">{issue}</em></span>}</p> ): loading && !error ? (<p>Loading...</p>) : (
        players && players.map((player) => (
            <ol className="pt-2">
                {/* limiting the amount of players to 5 */}
                    <motion.li className="flex justify-between p-2 list-decimal" variants={listPlayerVariants} key={player.id}>
                        <p className="block">{player.id}</p>
                        <p className=" w-36">{player.name}</p>
                            <p className="hidden w-24 sm:flex ">{ player.id === 6 ? player.id = 2 : player.id === 2 ? points["legends"] : player.id === 10 ? player.id = 3 : player.id === 3 ? points["pro"] : player.id < 10 && player.id > 4 ? player.id = 4 : player.id === 4 ? points["star"] : points["king"]}
                            </p>
                            <p className={player.id === 1 ? "text-white" : player.id === 2 ? "text-red-700" : player.id ===3 ? "text-gray-700" : "text-black"}>{[...Array(player.id === 6 ? player.id = 2 : player.id === 10 ? player.id = 3 : player.id < 10 && player.id > 4 ? player.id = 4 : player.id)].map((e, i) => (<span key={i}>{player.id <= 3 ? <FaCrown /> : <FaStar />}</span>))}</p>
                        </motion.li>
                <hr />
            </ol>

        )))}
        {players.length > 0 && 
            <dl className="flex justify-between px-12">
             <span>
                 <dt><FaCrown className="text-white"/></dt>
                 <dd>KING</dd>
             </span>
             <span>
                 <dt><FaCrown className="text-red-700"/></dt>
                 <dd>LEGENDS</dd>
             </span>
             <span>
                 <dt><FaCrown className="text-gray-700"/></dt>
                 <dd>PRO</dd>
             </span>
             <span>
                 <dt><FaStar/></dt>
                 <dd>STAR</dd>
             </span>
         </dl>
        }
       
    </motion.main>
  )
}

export default PlayerList