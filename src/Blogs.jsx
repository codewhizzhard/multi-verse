import { motion } from "framer-motion"
import { useContext, useState } from "react"
import DataContext from "./context/contextProvider"
import { Link } from "react-router-dom"
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

const Blogs = () => {
    // const [read, setRead] = useState(false); maybe it should also be use

    const {blogs, load, err, postsCategory, category } = useContext(DataContext)
  return (
    <motion.main variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        <section>
                <dl>
                    {blogs.map((blog) => (
                        postsCategory.find((post) => post === category) ?  category === blog.category && <li key={blog.id} className="p-5 mb-4 list-none bg-blue-200 rounded-xl">
                        <dt className="text-center">{blog.title}</dt>
                        {blog.content_text.length > 500 ? <dd>{blog.content_text.slice(0, 500)}<Link to={`/blogs/${blog.id}`}><button className="text-blue-800 hover:text-blue-300" >...read more </button></Link></dd> : <dd>{blog.content_text}</dd>} 
                    </li> : <li key={blog.id} className="p-5 mb-4 list-none bg-blue-200 rounded-xl">
                        <dt className="text-center">{blog.title}</dt>
                        {blog.content_text.length > 500 ? <dd>{blog.content_text.slice(0, 500)}<Link to={`/blogs/${blog.id}`}><button className="text-blue-800 hover:text-blue-300" >...read more</button></Link></dd> : <dd>{blog.content_text}</dd>} 
                    </li>
                    ))}
                </dl>
            {load && !err && <p className="pb-2">Loading blogs...</p>}
            {err && <p className="pb-2"><FaExclamationCircle className="inline w-5 h-5"/> {err.message}</p>}
        </section>
    </motion.main>
  )
}

export default Blogs

// *! this is the first solution before using higher order function which simplify the code for me
// this is lonnnnggggg
/* 
{ blogs.map((blog) => (
    <>
    {category === postsCategory[0] ? 
        blog.category === category &&
    : 
    category === postsCategory[1] ?
        blog.category === category &&
    <li key={blog.id} className="p-2 mb-2 list-none bg-blue-200 ">
        <dt className="text-center">{blog.title}</dt>
        {blog.content_text.length > 500 ? <dd>{blog.content_text.slice(0, 500)} <button className="text-blue-800 hover:text-blue-300" >...read more</button></dd> : <dd>{blog.content_text}</dd>} 
    </li>: 
    category === postsCategory[2] ?
        blog.category === category &&
    <li key={blog.id} className="p-2 mb-2 list-none bg-blue-200 ">
        <dt className="text-center">{blog.title}</dt>
        {blog.content_text.length > 500 ? <dd>{blog.content_text.slice(0, 500)} <button className="text-blue-800 hover:text-blue-300" >...read more</button></dd> : <dd>{blog.content_text}</dd>} 
    </li> : 
    category === postsCategory[3] ?
     blog.category === category &&
    <li key={blog.id} className="p-2 pb-2 mb-2 list-none bg-blue-200 ">
        <dt className="text-center">{blog.title}</dt>
        {blog.content_text.length > 500 ? <dd>{blog.content_text.slice(0, 500)} <button className="text-blue-800 hover:text-blue-300" >...read more</button></dd> : <dd>{blog.content_text}</dd>} 
    </li>: 
    <li key={blog.id} className="p-2 pb-2 mb-2 list-none bg-blue-200 ">
        <dt className="text-center">{blog.title}</dt>
        {blog.content_text.length > 500 ? <dd>{blog.content_text.slice(0, 500)} <button className="text-blue-800 hover:text-blue-300" >...read more</button></dd> : <dd>{blog.content_text}</dd>} 
    </li>} 
    </>))} */