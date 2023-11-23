import { useContext } from "react"
import DataContext from "./context/contextProvider"
import { motion } from "framer-motion"
import { FaExclamationCircle } from "react-icons/fa"

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

const Market = () => {
    const { products, err, load, details, category } = useContext(DataContext)
  return (
    <motion.main variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        <section>
            <ol className="flex flex-wrap w-full gap-3 place-content-center">
            {products.map((product) => (
                <>
                {/*  using details from details and checking the category property on the product to determine the visibility. */}
                {details.find((detail) => category === detail) ? product.category === category && <li className="relative" key={product.id}>
                    <img src={product.photo_url} alt={product.id} className="rounded-full w-72 h-72" width="72" height="72" title={product.description}/>
                    <p className="absolute bottom-2 right-32">{product.category}</p>
                    </li> : <li className="relative" key={product.id}>
                    <img src={product.photo_url} alt={product.id} className="rounded-full w-72 h-72" width="72" height="72" title={product.description}/>
                    <p className="absolute bottom-2 right-32">{product.category}</p>
                </li>}
                </>
            ))}
            </ol>
            {load && !err && <p className="pb-2">Loading blogs...</p>}
            {err && <p className="pb-2"><FaExclamationCircle className="inline w-5 h-5"/> {err.message}</p>}
          </section>
    </motion.main>
  )
}


export default Market

// *! this was the first pattern of solving it, but it is not of a good performance
/* category === details[0] ?
product.category === category &&
    <ul>
        <li className="relative" key={product.id}>
            <img src={product.photo_url} alt={product.id} className="rounded-full w-72 h-72" width="72" height="72" title={product.description}/>
            <p className="absolute bottom-2 right-32">{product.category}</p>
        </li>
    </ul>
: category === details[1] ? 
product.category === category && 
<ul>
    <li className="relative" key={product.id}>
        <img src={product.photo_url} alt={product.id} className="rounded-full w-72 h-72" width="72" height="72" title={product.description}/>
        <p className="absolute bottom-2 right-32">{product.category}</p>
    </li>
</ul> : 
    <ul>
    <li className="relative" key={product.id}>
        <img src={product.photo_url} alt={product.id} className="rounded-full w-72 h-72" width="72" height="72" title={product.description}/>
        <p className="absolute bottom-2 right-32">{product.category}</p>
    </li>
</ul>
}  */