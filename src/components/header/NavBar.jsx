import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import LinkMenu from './LinkMenu'

const NavBar = () => {
  // useState hook
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='group mx-auto flex max-w-6xl items-center justify-between py-2 px-4'>
      <a
        className='flex items-center justify-center font-inter text-xl font-bold text-white transition-colors duration-300 ease-in-out hover:text-primary-500'
        href='/#'
      >
        <span className='text-3xl font-medium text-primary-500 transition-colors duration-300 ease-in-out group-hover:text-white'>
          {'{'}
        </span>{' '}
        EB
        <span className='text-3xl font-medium text-primary-500 transition-colors duration-300 ease-in-out group-hover:text-white'>
          {'}'}
        </span>
      </a>
      <button className='md:hidden' onClick={handleToggle}>
        <GiHamburgerMenu className='h-8 w-8 text-white' />
      </button>
      <div
        className={`${
          isOpen ? 'left-0 ' : 'left-full '
        } fixed top-12 flex h-[calc(100vh-2rem)] w-full flex-col items-center bg-slate-800 pt-16 text-3xl transition-all duration-500 ease-in-out md:static md:h-auto md:w-auto md:flex-row md:items-start md:gap-8 md:bg-inherit md:pt-0 md:text-xl`}
      >
        <LinkMenu>Home</LinkMenu>
        <LinkMenu>Skills</LinkMenu>
        <LinkMenu>Projects</LinkMenu>
        <LinkMenu>Contact</LinkMenu>

        <button className='hidden'>Dark</button>
      </div>
    </nav>
  )
}

export default NavBar
