
const Footer = () => {

    const getNewDate = new Date()
    const getCurrentYear = getNewDate.getFullYear()
  return (
    <footer className="bg-slate-400 h-14 text-center pt-2 z-20">
        <p>copyright &copy; {getCurrentYear}</p>
    </footer>
  )
}

export default Footer