import { useContext, useState } from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import LinkMenu from './LinkMenu'
import LanguageContext from '../../context/LanguageContext'
import Language from './Language'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { texts } = useContext(LanguageContext)
  const { home, skills, projects, contact } = texts

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className=' mx-auto flex max-w-6xl items-center justify-between py-2 px-4'>
      <Link
        className='group flex cursor-pointer items-center justify-center font-inter text-xl font-bold text-white transition-colors duration-300 ease-in-out hover:text-primary-500'
        to='home'
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <span className='text-3xl font-medium text-primary-500 transition-colors duration-300 ease-in-out group-hover:text-white'>
          {'{'}
        </span>{' '}
        EB
        <span className='text-3xl font-medium text-primary-500 transition-colors duration-300 ease-in-out group-hover:text-white'>
          {'}'}
        </span>
      </Link>
      <button className='md:hidden' onClick={handleToggle}>
        <GiHamburgerMenu className='h-8 w-8 text-white' />
      </button>
      <div
        className={`${
          isOpen ? 'left-0 ' : 'left-full '
        } fixed top-12 flex h-[calc(100vh-2rem)] w-full flex-col items-center bg-slate-800 pt-16 text-3xl transition-all duration-500 ease-in-out md:static md:h-auto md:w-auto md:flex-row md:items-start md:gap-8 md:bg-inherit md:pt-0 md:text-xl`}
      >
        <Language />
        <LinkMenu section={'home'} offset={-55} onClick={handleLinkClick}>
          {home.title}
        </LinkMenu>
        <LinkMenu section={'skills'} offset={-55} onClick={handleLinkClick}>
          {skills.title}
        </LinkMenu>
        <LinkMenu section={'projects'} offset={-55} onClick={handleLinkClick}>
          {projects.title}
        </LinkMenu>
        <LinkMenu section={'contact'} offset={-65} onClick={handleLinkClick}>
          {contact.title}
        </LinkMenu>

        <button className='hidden'>Dark</button>
      </div>
    </nav>
  )
}

export default NavBar
