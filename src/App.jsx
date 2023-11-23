import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import PlayerList from "./PlayerList"
import Game from "./Game"
import Blogs from "./Blogs"
import Traffic from "./Traffic"
import Market from "./Market"
import BlogPosts from "./BlogPosts"
import About from "./About"
import Contact from "./Contact"
import Missing from "./Missing"
import { AnimatePresence } from "framer-motion"

function App() {

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="playerlist" element={<PlayerList />} />
          <Route path="gaming" element={<Game />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:blogId" element={<BlogPosts />} />
          <Route path="traffic" element={<Traffic />} />
          <Route path="market" element={<Market />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
