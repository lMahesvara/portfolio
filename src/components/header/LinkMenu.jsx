const LinkMenu = ({ children }) => {
  return (
    <a
      className='w-full p-5 text-center text-white transition-colors duration-300 ease-in-out hover:text-primary-500 md:w-auto md:p-0'
      href='/#'
    >
      {children}
    </a>
  )
}

export default LinkMenu
