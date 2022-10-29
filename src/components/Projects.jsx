import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <section className='mx-auto mt-16 flex flex-col items-center gap-16'>
      <SectionTitle>Projects</SectionTitle>
      <div>
        <ProjectCard />
      </div>
    </section>
  )
}

export default Projects
