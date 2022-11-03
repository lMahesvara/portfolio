import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import data from '../data/data.json'
import { useState, useEffect } from 'react'

const { projects } = data

const Projects = () => {
  const [total, setTotal] = useState(false)
  const [projectsToShow, setProjectsToShow] = useState([projects])
  const handleShowMore = () => {
    setTotal(!total)
  }
  useEffect(() => {
    const getWindowsWidth = () => {
      if (total) setProjectsToShow(projects)
      else if (window.innerWidth < 768) {
        setProjectsToShow(projects.slice(0, 3))
      } else {
        setProjectsToShow(projects.slice(0, 6))
      }
    }
    window.addEventListener('resize', getWindowsWidth)
    getWindowsWidth()
    return () => window.removeEventListener('resize', getWindowsWidth)
  }, [total])
  const buttonText = total ? 'Show Less' : 'Show More'

  return (
    <section
      id='projects'
      className='mx-auto mt-8 mb-4 flex flex-col items-center gap-16'
    >
      <SectionTitle>Projects</SectionTitle>
      <div className='flex flex-col items-center gap-4'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {projectsToShow.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <button
          className='rounded-md bg-primary-500 px-4 py-2 font-inter font-bold text-black transition duration-300 ease-in-out hover:bg-primary-200'
          onClick={handleShowMore}
        >
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default Projects
