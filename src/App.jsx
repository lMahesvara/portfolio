import Home from './components/Home'
import Header from './components/header/Header'
import Skills from './components/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import ScrollToTop from 'react-scroll-to-top'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <div className='flex min-h-screen flex-col bg-slate-800'>
      <ScrollToTop
        smooth
        className='bottom-6 right-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-500 text-black shadow-none hover:bg-primary-600 md:bottom-8 md:right-8 lg:bottom-8 lg:right-20'
        component={<AiOutlineArrowUp className='h-5 w-5 stroke-2' />}
      />
      <LanguageProvider>
        <Header />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </LanguageProvider>
    </div>
  )
}

export default App
