import { useContext } from 'react'
import data from '../data/data.json'
import SectionTitle from './SectionTitle'
import Skill from './Skill'
import LanguageContext from '../context/LanguageContext'

const { skills } = data

const Skills = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <section
      id='skills'
      className='mx-auto flex min-h-[50vh] flex-col items-center gap-16 '
    >
      <SectionTitle>{texts?.skills.title}</SectionTitle>
      <article className='flex max-w-xl flex-wrap justify-center gap-5'>
        {skills.map((skill, index) => (
          <Skill key={index} image={skill.image} title={skill.title} />
        ))}
      </article>
    </section>
  )
}

export default Skills
