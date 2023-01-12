import { createContext, useState } from 'react'
import translations from '../data/language.json'

const LanguageContext = createContext()

const initialLanguage = 'es'
console.log(translations)

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage)
  const [texts, setTexts] = useState(translations[language])

  const handleLanguage = e => {
    const { value } = e.target
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
