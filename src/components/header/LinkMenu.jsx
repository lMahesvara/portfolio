import { Link } from 'react-scroll'

const LinkMenu = ({ children, section, offset, onClick }) => {
  return (
    <Link
      activeClass='md:border-b-2 md:border-primary-500 !text-primary-500 md:!text-white'
      to={section}
      spy={true}
      smooth={true}
      offset={offset}
      duration={400}
      className='w-full cursor-pointer p-5 text-center text-white  transition-colors duration-300 ease-in-out hover:text-primary-500 md:w-auto md:p-0'
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default LinkMenu
