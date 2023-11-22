import { FaBars } from 'react-icons/fa'
import { useContext } from 'react'
import DataContext from './context/contextProvider'
import { Link } from 'react-router-dom'

const Header = () => {
    const {setMobileSideBar} = useContext(DataContext)

    const scrollChecker = () => {
        let result= ""
        if (window.scrollY === 0) {
            return result = "bg-slate-400"
        }
        return result = "bg-slate-400"
    }
  return (
    // 
    <header className="z-20 flex justify-between py-6 pl-2 text-base font-medium text-center shadow-lg bg-slate-400 sm:gap-36 shadow-gray-900">
        <h1>MULTI <strong className='text-blue-600'>VERSE</strong></h1>
        <div className="block pr-4 sm:hidden"><FaBars onClick={() => setMobileSideBar((prev) => !prev)}/></div>
        <nav className='flex-grow hidden sm:block'>
            <ul className='flex justify-around'>
                <Link to={"/"}>
                    <li>HOME</li>
                </Link>
                <Link to={"about"}>
                    <li>ABOUT</li>
                </Link>
                <Link to={"contact"}>
                    <li>CONTACT</li>
                </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
////`${scrollChecker} 