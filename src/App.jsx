import Home from './components/Home'
import Header from './components/header/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from 'react-scroll-to-top'
import { AiOutlineArrowUp } from 'react-icons/ai'

function App() {
  return (
    <div className='flex min-h-screen flex-col bg-slate-800'>
      <ScrollToTop
        smooth
        className='bottom-6 right-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-500 text-black shadow-none md:bottom-8 md:right-20'
        /* make bolder */
        component={<AiOutlineArrowUp className='h-5 w-5 stroke-2' />}
      />
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
