import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import data from '../data/data.json'

const { projects } = data

const Projects = () => {
  return (
    <section className='mx-auto mt-16 flex flex-col items-center gap-16'>
      <SectionTitle>Projects</SectionTitle>
      <div className='grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
