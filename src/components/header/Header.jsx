import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='fixed top-0 left-0  right-0 z-30 w-full bg-transparent backdrop-blur-[20px] transition-shadow duration-500 ease-in-out'>
      <NavBar />
    </header>
  )
}

export default Header
