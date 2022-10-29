import Home from './components/Home'
import Header from './components/header/Header'
import Skills from './components/Skills'

function App() {
  return (
    <div className='flex min-h-screen flex-col bg-slate-800'>
      <Header />
      <Home />
      <Skills />
    </div>
  )
}

export default App
