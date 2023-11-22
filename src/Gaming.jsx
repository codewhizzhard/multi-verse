import { useContext, useEffect, useRef, useState} from "react"
import DataContext from "./context/contextProvider"
import { motion, AnimatePresence } from "framer-motion"
import { FaExclamationCircle } from "react-icons/fa"

const levelVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 50,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
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
const Gaming = () => {
    const [challenge, setChallenge] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const { into, players, loading, error, issue, selected, setSelected } = useContext(DataContext)

    const prevSection = useRef("nothing")

    useEffect(() => {

        prevSection.current = into

    }, [into])
    const selection = () => {
       const res = () => {
        setSelectedValue(player.name)
        setSelected(false)
        }
        return res

    }
    const work = selection()
   const filtered = (id) =>  players.filter((player) => player.id === id && console.log(player.name))

  return (
    <> 
        <motion.h2 className="text-center text-red-400" >{into}</motion.h2> 
        {loading && error ? (<motion.p className="p-2 text-red-700" variants={errorVariants}>{issue && <span className="pl-4"><FaExclamationCircle className="inline w-5 h-5"/> <em className="pl-1">{issue}</em></span>}</motion.p> ): loading && !error ? (<p>Loading...</p>) : (
            
          into === "OBTAIN KINGSHIP" ?
            (players.map((player) => player.id === 1 &&
                <article className="text-center">
                    <p>We have only a <strong>KING</strong> that has obtain over 2000 points in the history of multi verse gaming, you think you can <em>RULE</em> over him? if yes click on the button below</p>
                    <button className="p-2 border border-red-300 border-solid rounded-md hover:bg-gray-400" onClick={() => setChallenge(true)}>CHALLENGE</button>
                    { challenge &&
                        <section>
                            <ul className="flex justify-between">
                                <li>{player.name}</li>
                                <li>player</li>
                            </ul>
                    </section>
                    }
                </article>)) : 
                 into === "LEGENDARY" ?
                (players.map((player) =>  player.id === 2 &&
                <article className="text-center">
                        {!selected &&
                        <li onClick={() => {setSelectedValue(player.name); setChallenge(false)}} key={player.id} className="cursor-pointer">{player.name}</li> }
                         {selectedValue === player.name && <>
                         { challenge &&
                            <p className=" text-start">We have only two <strong>LEGENDS</strong> that has over 1500+ points in the history of multi verse gaming, you think you can <em>RULE</em> over one of them to become LEGENDARY in gaming? if yes click on the button below</p>}
                           <button className="p-2 border border-red-300 border-solid rounded-md hover:bg-gray-400" onClick={() => {setChallenge(true); setSelected(true)}}>CHALLENGE</button>
                            {challenge &&
                                <section>
                                    <ul className="flex justify-between">
                                        <li>{selectedValue}</li>
                                        <li>player</li>
                                    </ul>
                                </section>}
                                </>}
                    </article>)) : 
                        into === "PRO" ?
                        (players.map((player) =>  player.id === 3 &&
                     <article className="text-center">
                        {!selected &&
                        <li onClick={() => {setSelectedValue(player.name); setChallenge(false)}} key={player.id} className="block cursor-pointer">{player.name}</li>}
                         {selectedValue === player.name &&<>
                            {challenge &&
                            <p>We have only two <strong>PROS</strong> players that have aced some levels but not yet at the top of their game yet, having over 1000 points in the history of multi verse gaming, you think you can <em>RULE</em> over them? if yes click on the button below</p>}
                           <button className="p-2 border border-red-300 border-solid rounded-md hover:bg-gray-400" onClick={() => {setChallenge(true); setSelected(true)}}>CHALLENGE</button>
                            {challenge &&
                                <section>
                                    <ul className="flex justify-between">
                                        <li>{selectedValue}</li>
                                        <li>player</li>
                                    </ul>
                                </section>}
                            </>
                            }
                    </article> )) : 
                    into === "BECOME A STAR" ? 
                    (players.map((player) =>  player.id === 4 &&
                    <article className="text-center">
                        {!selected  &&
                        <li onClick={() => {setSelectedValue(player.name); setChallenge(false)}} key={player.id} className="cursor-pointer">{player.name}</li> }
                         {selectedValue === player.name && <>
                            { challenge &&
                            <p>This is a starter level with the majority of players in this category with points greater than 10 and barely greater than 500, win this challenge and become a <strong>STAR</strong> player</p>}
                            <button className="p-2 border border-red-300 border-solid rounded-md hover:bg-gray-400" onClick={() => {setChallenge(true); setSelected(true)}}>CHALLENGE</button>
                            {challenge &&
                                <section>
                                    <ul className="flex justify-between">
                                        <li>{selectedValue}</li>
                                        <li>player</li>
                                    </ul>
                                </section>}
                            </>
                            }
                    </article> ))
                         : <p>SORRY! No Challenges For You, Recheck Clicked Challenges</p>
                )}</>)}

export default Gaming
