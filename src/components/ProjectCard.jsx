import { BiLinkExternal } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

const ProjectCard = ({
  title,
  image,
  urlDeploy,
  urlGH,
  description,
  techs,
  isDeployed
}) => {
  return (
    <article className='flex h-96 w-80 flex-col items-start justify-start rounded-md bg-white'>
      <h3 className='w-full rounded-t-md bg-primary-500 p-2 text-center font-inter text-lg font-bold text-black'>
        {title}
      </h3>
      <div className='relative h-40 w-80 cursor-pointer overflow-hidden'>
        <img
          src={`src/images/${image}`}
          alt={title}
          className='h-full w-full'
        />
        <a
          href={urlDeploy}
          className='absolute top-0 flex h-full w-full items-center justify-center bg-black/80 text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100'
        >
          <span>Deploy</span>
          <BiLinkExternal className='ml-2 h-6 w-6' />
        </a>
      </div>
      <p className='w-full p-5 text-sm'>{description}</p>
      <p className='w-full pl-5 font-inter text-xs '>{techs}</p>
      <div className='flex w-full justify-end gap-2 p-5'>
        <a target='_blank' rel='noreferrer noopener' href={urlDeploy}>
          <BiLinkExternal className=' h-6 w-6' />
        </a>
        <a target='_blank' rel='noreferrer noopener' href={urlGH}>
          <AiFillGithub className='h-6 w-6' />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard

/* default props */
ProjectCard.defaultProps = {
  title: 'Title',
  image: 'ejemplo.jpg',
  urlDeploy: 'http://localhost:5173/',
  urlGH: '',
  description:
    'Portfolio personal realizado en React optimizado para una rápida apertura y baja transferencia.',
  techs: 'React - Tailwind',
  isDeployed: true
}
