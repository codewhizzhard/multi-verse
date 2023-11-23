import { useState, createContext, useEffect } from "react";
import axios from "../api/axios";
import api from "../api/api";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [mobileSideBar, setMobileSideBar] = useState(false);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [issue, setIssue] = useState("");
    const [error, setError] = useState(false);
    const [into, setInto] = useState("BECOME A STAR");
    const [selected, setSelected] = useState(false);
    const [err, setErr] = useState("");
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [load, setLoad] = useState(false);
    const [category, setCategory] = useState("");
    const [blogs, setBlogs] = useState([])
    const [max, setMax] = useState(10);
    const [photos, setPhotos] = useState([]);
    const [peak, setPeak] = useState(10);
    
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                let rawPlayers = await axios.get("/users")
                setPlayers(rawPlayers.data)
                if (rawPlayers.data.length > 0) {setLoading(false)}
            } catch (err) {
                setError(true)
                if(err.response) {
                    console.warn(err.response)
                    console.warn(err.data)
                    console.warn(err.message)
                } else {
                    setIssue(`ERROR: ${err.message}! Couldn't Load Players`)
                }
            }
        }
        fetchPlayers()
    }, [max])

   
   
    useEffect(() => {
        const fetchProducts =  async() => {
            setLoad(true)
            try {
                const request = await api.get(`/products?offset=${0}&limit=${limit}`)
                const products = request.data.products
                setProducts(products)
                setLoad(false)
                console.log(products)
            } catch(err) {
                setErr(err)
            }
        }
        fetchProducts()
    }, [limit])

    
    useEffect(() => {
        const fetchBlogs =  async() => {
            setLoad(true)
            try {
                const blogsRequest = await api.get(`/blog-posts?offset=${0}&limit=${max}`)
                const blogs = blogsRequest.data.blogs
                setBlogs(blogs)
                setLoad(false)
            } catch(err) {
                setErr(err)
            }
        }
        fetchBlogs()
    }, [max])

    useEffect(() => {
        const fetchPhotos =  async() => {
            setLoad(true)
            try {
                const photosRequest = await api.get(`/photos?offset=${0}&limit=${peak}`)
                const photos = photosRequest.data.photos
                setPhotos(photos)
                setLoad(false)
            } catch(err) {
                setErr(err)
            }
        }
        fetchPhotos()
    }, [peak])

    const levels = ["OBTAIN KINGSHIP", "LEGENDARY", "PRO", "BECOME A STAR"]
    const details = ["digital", "physical"]
    const postsCategory = ["love", "gaming", "math", "programming"]
    const returnedValue = {mobileSideBar, setMobileSideBar, players, setPlayers, loading, setLoading, issue, setIssue, error, setError, into, setInto, levels, selected, setSelected, err, products, limit, setLimit, load, details, category, setCategory, blogs, max, setMax, postsCategory, photos, peak, setPeak}
    return (
        <DataContext.Provider value={returnedValue}>
            {children}
        </DataContext.Provider>
    )
    
}

export default DataContext