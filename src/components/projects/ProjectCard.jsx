import { BiLinkExternal } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import LanguageContext from '../../context/LanguageContext'
import { useContext } from 'react'
import ListOfTags from './ListOfTags'
import ProjectDemo from './ProjectDemo'

const ProjectCard = ({
  id,
  title,
  image,
  demo,
  github,
  description,
  tags,
  status
}) => {
  const { texts } = useContext(LanguageContext)
  const { projects } = texts.projects

  return (
    <article className='relative flex min-h-[24rem] w-80 flex-col items-start justify-start rounded-md bg-white'>
      <h3 className='w-full rounded-t-md bg-primary-500 p-2 text-center font-inter text-lg font-bold text-black'>
        {title}
      </h3>
      <div className='relative h-40 min-h-[10rem] w-80 cursor-pointer overflow-hidden'>
        <img
          src={`/assets/img/projects/${image || 'default.svg'}`}
          alt={title}
          className='h-full w-full'
          decoding='async'
          loading='lazy'
        />
        <ProjectDemo demo={demo} status={status} image={image} />
      </div>
      <p className='h-24 w-full p-5 text-sm'>
        {projects.find(el => el[id])?.[id]?.description}
      </p>
      <div className='flex flex-wrap items-center gap-2 px-5'>
        <ListOfTags tags={tags} />
      </div>
      <div className='absolute bottom-5 right-5  flex items-center justify-end gap-2'>
        {demo && (
          <a target='_blank' rel='noreferrer noopener' href={demo}>
            <BiLinkExternal className=' h-6 w-6 text-black transition-all duration-300  hover:text-primary-700' />
          </a>
        )}
        <a target='_blank' rel='noreferrer noopener' href={github}>
          <AiFillGithub className='h-6 w-6 text-black transition-all duration-300  hover:text-primary-700' />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
