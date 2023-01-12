import { createContext, useState } from 'react'
import translations from '../data/language.json'

const LanguageContext = createContext()

const initialLanguage = 'en'

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage)
  const [texts, setTexts] = useState(translations[language])

  const handleLanguage = e => {
    const { value } = e.target
    console.log(value, e.target, e.target.value)
    setLanguage(value)
    setTexts(translations[value])
  }
  const data = { texts, handleLanguage }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export { LanguageProvider }

export default LanguageContext
