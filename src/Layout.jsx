import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useContext, useState, useRef, useEffect } from "react";
import DataContext from "./context/contextProvider";
import { motion, AnimatePresence } from "framer-motion"
import { FaLongArrowAltUp, FaLongArrowAltDown, FaLongArrowAltRight, FaTimes } from "react-icons/fa";

const mobileAsideVariants = {
    hidden: {
        opacity: 0,
        y: "-100vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.4, delay: .2
        }
    },
    exit: {
        opacity: .6,
        y: "100vh",
        transition: {
            duration: 1.4, delay:.4
        }
    }
}

const biggerScreenVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .4
        }
    },
    exit: {
        opacity: .2,
        x: -400,
        transition: {
            duration: .5
        }
    }
}

const tapVariants = {
    tap:{
        y: -200,
        //backgroundColor: "rgba(0,200,300,200)",
        origin: {
            opacity: 1
        }
    },
    hover: {
       backgroundColor: "rgba(0,200,300,200)"
    }
}

const aiVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 1
        }
    }
}
const helpVariants = {
    hidden: {
        opacity: .3,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    }
}
const Layout = () => {
    const { mobileSideBar, levels, setInto, setSelected, limit, setLimit, setCategory, details, category, max, setMax, postsCategory, setPeak, peak} = useContext(DataContext)
    const [val, setVal] = useState(10);
    const [ai, setAi] = useState(true);
    const loadRef = useRef()
    const inputRef = useRef()

    useEffect(() => {
        loadRef.current = val
    }, [val])
    
     ////// not longer in use
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const location = useLocation()
    // delete it later
    //const condition = location.pathname === "/game" && location.pathname === "/society" && location.pathname === "/traffic" && location.pathname === "/market"
    const currentPath = ["/gaming", "/blogs", "/traffic", "/market"]
    const path = location.pathname.slice(1).toUpperCase()
    

  return (
    
    <div className="bg:flex flex-col h-[100vh] hidden relative">
        <Header />
        <div className="relative flex flex-grow w-full overflow-hidden">
            {/* // *! this is an aside for screen having 640px and above */}
            <AnimatePresence>
                { currentPath.some((path) => location.pathname === path) &&
                    /* only display if the location is one of the currentPath */
                    <motion.aside className="hidden sm:flex min-w-[200px] lg:min-w-[250px] h-full bg-gray-600 overflow-y-auto text-center flex-col justify-between" variants={biggerScreenVariants} exit="exit" initial="hidden" animate="visible">
                        <h2 className="pt-10">WELCOME TO {path} </h2>
                        {location.pathname === "/gaming" ? 
                        (   <ol className="relative">
                                <li className="list-none bg-gray-300">{ levels.map((level) => (
                                    <motion.button className="block w-full py-5 cursor-pointer focus:text-white focus:bg-red-400" variants={tapVariants} whileTap="tap" onTapStart={() => {setInto(level); setSelected(false)}} whileHover="hover">{level}</motion.button>
                                ))}
                                </li>
                                <AnimatePresence>
                                {!ai  ?
                                <motion.button onClick={() => setAi(true)} variants={helpVariants} initial="hidden" animate="visible" exit="hidden">HELP</motion.button> : <span></span> }
                                </AnimatePresence>
                                <AnimatePresence>
                                {ai &&
                                <motion.section className="absolute bottom-0 bg-white" variants={aiVariants} exit="exit" animate="visible" initial="hidden">
                                    <div className="relative bg-red-300">
                                        <h3>HELP</h3>
                                        <p>Hi there, my name is <em>HELP</em>, I am multiverse ai that will guide you on how you should go about your ways in the gaming.</p>
                                        <p>Hover below <q>WELCOME TO GAMING</q> to select a challenge, you are adviced to start from star, click on the shown players and click challenge to start game</p>
                                        <FaTimes className="absolute top-0 right-0" onClick={() => setAi(false)}/>
                                    </div>
                                </motion.section>
                                }
                                </AnimatePresence>
                            </ol>) :  
                            location.pathname === "/market" ? (
                                <article className="relative flex flex-col justify-between flex-grow pt-10 overflow-y-auto">
                                <section className="flex flex-col gap-8">
                                    <h3>FILTER SHOWN PRODUCTS</h3>
                                    <ul>
                                        <li onClick={() => setCategory("")} className="cursor-pointer">All Products {category === "" && <FaLongArrowAltRight className="inline"/>}</li>
                                        <li onClick={() => setCategory(details[0])} className="cursor-pointer">Digital Products only {category === details[0] && <FaLongArrowAltRight className="inline"/>}</li>
                                        <li onClick={() => setCategory(details[1])} className="cursor-pointer">Physical Products only {category === details[1] && <FaLongArrowAltRight className="inline"/>}</li>
                                    </ul>
                                </section>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <label htmlFor="limit" className="block pb-2">SET PRODUCTS LIMITS</label>
                                    <input type="number" id="limit" value={val} onChange={(e) => setVal(e.target.value)} min={limit} max={1000} className="w-3/4 " ref={inputRef}/>
                                    <button type="submit" onClick={() => setLimit(val)} className="block w-full pt-2">{loadRef.current === 10 ? "load more" : val > loadRef.current ? <span>Load more <FaLongArrowAltUp className="inline h-5 pb-1"/></span> : <span>Load less <FaLongArrowAltDown className="inline h-5 pb-1"/></span>}</button>
                                </form>
                                <AnimatePresence>
                                { ai &&
                                <motion.section className="absolute bottom-0 bg-white" variants={aiVariants} exit="exit" animate="visible" initial="hidden">
                                    <div className="relative bg-red-300">
                                        <h3>HELP</h3>
                                        <p>Hi there, my name is <em>HELP</em>, I am multiverse ai that will love to guide you on how you should go about your ways in the market,</p>
                                        <p className="pt-2">You can decide to see all products or specific products, input your value and click the button to load out your inputted value</p>
                                        <FaTimes className="absolute top-0 right-0" onClick={() => setAi(false)}/>
                                    </div>
                                </motion.section>
                                }
                                </AnimatePresence>
                                <AnimatePresence>
                                {!ai  ?
                                <motion.button onClick={() => setAi(true)} variants={helpVariants} initial="hidden" animate="visible" exit="hidden">HELP</motion.button> : <span></span> }
                                </AnimatePresence>
                                </article>)
                         : location.pathname === "/blogs" ? (
                            /* trying to get for society */
                            <article className="relative flex flex-col justify-between flex-grow pt-10 overflow-y-auto">
                                <section className="flex flex-col gap-8">
                                    <h3>FILTER POSTS CATEGORY</h3>
                                    <ul>
                                        <li onClick={() => setCategory("")} className="cursor-pointer">All Posts {category === "" && <FaLongArrowAltRight className="inline"/>}</li>
                                        <li onClick={() => setCategory(postsCategory[0])} className="cursor-pointer">Love only{category === postsCategory[0] && <FaLongArrowAltRight className="inline"/>}</li>
                                        <li onClick={() => setCategory(postsCategory[1])} className="cursor-pointer">Gaming only{category === postsCategory[1] && <FaLongArrowAltRight className="inline"/>}</li>
                                        <li onClick={() => setCategory(postsCategory[2])} className="cursor-pointer">Math only {category === postsCategory[2] && <FaLongArrowAltRight className="inline"/>}</li>
                                        <li onClick={() => setCategory(postsCategory[3])} className="cursor-pointer">Programming only {category === postsCategory[3] && <FaLongArrowAltRight className="inline"/>}</li>
                                    </ul>
                                </section>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <label htmlFor="max" className="block pb-2">SET POSTS LIMITS</label>
                                    <input type="number" id="max" value={val} onChange={(e) => setVal(e.target.value)} min={max} max={1000} className="w-3/4 " ref={inputRef}/>
                                    <button type="submit" onClick={() => setMax(val)} className="block w-full pt-2">{loadRef.current === 10 ? "load more" : val > loadRef.current ? <span>Load more <FaLongArrowAltUp className="inline h-5 pb-1"/></span> : <span>Load less <FaLongArrowAltDown className="inline h-5 pb-1"/></span>}</button>
                                </form>
                                <AnimatePresence>
                                { ai &&
                                <motion.section className="absolute bottom-0 bg-white" variants={aiVariants} exit="exit" animate="visible" initial="hidden">
                                    <div className="relative bg-red-300">
                                        <h3>HELP</h3>
                                        <p>Hi there, my name name is <em>HELP</em>, I am multiverse ai that will love to guilde you on how you should about your ways in the society,</p>
                                        <p className="pt-2">You can decide to see all blogs or specific blogs, input your value and click the button to load out your inputted value</p>
                                        <FaTimes className="absolute top-0 right-0" onClick={() => setAi(false)}/>
                                    </div>
                                </motion.section>
                                }
                                </AnimatePresence>
                                <AnimatePresence>
                                {!ai  ?
                                <motion.button onClick={() => setAi(true)} variants={helpVariants} initial="hidden" animate="visible" exit="hidden">HELP</motion.button> : <span></span> }
                                </AnimatePresence>
                            </article>
                         ): location.pathname === "/traffic" && (
                            <article className="relative flex flex-col justify-between flex-grow pt-10 overflow-y-auto">
                                <div>
                                {/* todo still under construction */}
                                </div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <label htmlFor="peak" className="block pb-2">SET POSTS LIMITS</label>
                                    <input type="number" id="max" value={val} onChange={(e) => setVal(e.target.value)} min={peak} max={1000} className="w-3/4 " ref={inputRef}/>
                                    <button type="submit" onClick={() => setPeak(val)} className="block w-full pt-2">{loadRef.current === 10 ? "load more" : val > loadRef.current ? <span>Load more <FaLongArrowAltUp className="inline h-5 pb-1"/></span> : <span>Load less <FaLongArrowAltDown className="inline h-5 pb-1"/></span>}</button>
                                </form>
                                <AnimatePresence>
                                { ai &&
                                <motion.section className="absolute bottom-0 bg-white" variants={aiVariants} exit="exit" animate="visible" initial="hidden">
                                    <div className="relative bg-red-300">
                                        <h3>HELP</h3>
                                        <p>Hi there, this is <em>HELP</em>, I am multiverse ai that will love to guide you on how you should about your ways in the traffic, i am still under construction with the whole traffic page</p>
                                        <FaTimes className="absolute top-0 right-0" onClick={() => setAi(false)}/>
                                    </div>
                                </motion.section>
                                }
                                </AnimatePresence>
                                <AnimatePresence>
                                {!ai  ?
                                <motion.button onClick={() => setAi(true)} variants={helpVariants} initial="hidden" animate="visible" exit="hidden">HELP</motion.button> : <span></span> }
                                </AnimatePresence>
                            </article>
                         )}
                    </motion.aside>
                }
                {/* End for biggerScreen rules */}
            </AnimatePresence>
            {/* //  *!this is for mobile or smaller screen below 640px */}
            <AnimatePresence>
                { mobileSideBar && (
                    <motion.aside className="fixed sm:hidden bg-red-800 w-[340px] h-full z-10 overflow-y-auto"  variants={mobileAsideVariants} initial="hidden" animate="visible" exit="exit">
                        <section>
                            <h2>GAMING</h2>
                            <li className="list-none bg-gray-300">{ levels.map((level) => (
                                    <motion.button className="block w-full py-5 cursor-pointer focus:text-white focus:bg-red-400" variants={tapVariants} whileTap="tap" onTapStart={() => {setInto(level); setSelected(false)}} whileHover="hover">{level}</motion.button>
                                ))}
                                </li>
                        </section>
                        <section>
                            <h2>MARKET</h2>
                            <ul>
                                <li onClick={() => setCategory("")} className="cursor-pointer">All Products {category === "" && <FaLongArrowAltRight className="inline"/>}</li>
                                <li onClick={() => setCategory(details[0])} className="cursor-pointer">Digital Products only {category === details[0] && <FaLongArrowAltRight className="inline"/>}</li>
                                <li onClick={() => setCategory(details[1])} className="cursor-pointer">Physical Products only {category === details[1] && <FaLongArrowAltRight className="inline"/>}</li>
                            </ul>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="max" className="block pb-2">SET POSTS LIMITS</label>
                                <input type="number" id="max" value={val} onChange={(e) => setVal(e.target.value)} min={max} max={1000} className="w-3/4 " ref={inputRef}/>
                                <button type="submit" onClick={() => setMax(val)} className="block w-full pt-2">{loadRef.current === 10 ? "load more" : val > loadRef.current ? <span>Load more <FaLongArrowAltUp className="inline h-5 pb-1"/></span> : <span>Load less <FaLongArrowAltDown className="inline h-5 pb-1"/></span>}</button>
                                </form>
                        </section>
                        <section>
                            <h2>Blogs</h2>
                            <ul>
                                <li onClick={() => setCategory("")} className="cursor-pointer">All Posts {category === "" && <FaLongArrowAltRight className="inline"/>}</li>
                                <li onClick={() => setCategory(postsCategory[0])} className="cursor-pointer">Love only{category === postsCategory[0] && <FaLongArrowAltRight className="inline"/>}</li>
                                <li onClick={() => setCategory(postsCategory[1])} className="cursor-pointer">Gaming only{category === postsCategory[1] && <FaLongArrowAltRight className="inline"/>}</li>
                                <li onClick={() => setCategory(postsCategory[2])} className="cursor-pointer">Math only {category === postsCategory[2] && <FaLongArrowAltRight className="inline"/>}</li>
                                <li onClick={() => setCategory(postsCategory[3])} className="cursor-pointer">Programming only {category === postsCategory[3] && <FaLongArrowAltRight className="inline"/>}</li>
                            </ul>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="max" className="block pb-2">SET POSTS LIMITS</label>
                                <input type="number" id="max" value={val} onChange={(e) => setVal(e.target.value)} min={max} max={1000} className="w-3/4 " ref={inputRef}/>
                                <button type="submit" onClick={() => setMax(val)} className="block w-full pt-2">{loadRef.current === 10 ? "load more" : val > loadRef.current ? <span>Load more <FaLongArrowAltUp className="inline h-5 pb-1"/></span> : <span>Load less <FaLongArrowAltDown className="inline h-5 pb-1"/></span>}</button>
                            </form>
                        </section>
                    </motion.aside>
                )}
            </AnimatePresence>
            <div className="flex-grow py-4 pl-4 pr-2 overflow-y-auto sm:text-sm lg:text-base">
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout