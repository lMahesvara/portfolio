import { IoLanguageSharp } from 'react-icons/io5'
import LanguageContext from '../../context/LanguageContext'
import { useContext, useState } from 'react'

const Language = () => {
  const { handleLanguage, initialLanguage } = useContext(LanguageContext)
  const [language, setLanguage] = useState(initialLanguage)

  const handleClick = e => {
    language === 'es' ? (e.target.value = 'en') : (e.target.value = 'es')
    handleLanguage(e)
    setLanguage(e.target.value)
  }

  return (
    <button
      className='flex w-full items-center justify-center gap-1 p-5 text-white hover:text-primary-500 md:my-auto md:w-auto md:p-0'
      onClick={handleClick}
      value={language}
    >
      <IoLanguageSharp className='h-8 w-8 text-inherit transition-colors duration-300 ease-in-out hover:text-inherit md:h-6 md:w-6' />
      <span className='text-2xl text-inherit transition-colors duration-300 ease-in-out hover:text-inherit md:text-base'>
        {language.toUpperCase()}
      </span>
    </button>
  )
}

export default Language
