import { useParams } from "react-router-dom"
import { useContext } from "react"
import DataContext from "./context/contextProvider"
import { motion } from "framer-motion"

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

const BlogPosts = () => {

  const { blogs, load, err } = useContext(DataContext)
  const { blogId } = useParams()
  const blog = blogs.filter((blog) => (blog.id).toString() === blogId)

  return (
    <>
      <motion.main variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        {blog.map((blog) => (
          <li key={blog.id} className="list-none ">
            <h2 className="pb-4 text-center">{blog.title.toUpperCase()}</h2>
            <p>{blog.content_text}</p> 
          </li>
        ))}
      {load && !err && <p className="pb-2">Loading blog...</p>}
      {err && <p className="pb-2">{err.message}</p>}
  </motion.main>
    </>
  )
}

{/* 
    ? (
    
   ): "no"*/}
export default BlogPosts