import data from '../data/data.json'
import SectionTitle from './SectionTitle'
import Skill from './Skill'

const { skills } = data

const Skills = () => {
  return (
    <section className='mx-auto flex flex-col items-center gap-16 '>
      <SectionTitle>Skills</SectionTitle>
      <article className='flex max-w-xl flex-wrap justify-center gap-5'>
        {skills.map((skill, index) => (
          <Skill key={index} image={skill.image} title={skill.title} />
        ))}
      </article>
    </section>
  )
}

export default Skills
