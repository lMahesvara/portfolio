import { BiLinkExternal } from 'react-icons/bi'

const ProjectDemo = ({ demo, status, imageStyle }) => {
  return (
    <>
      {demo ? (
        <a
          target='_blank'
          rel='noreferrer noopener'
          href={demo}
          className={`absolute top-0 flex h-full w-full items-center justify-center bg-black/80 text-xl text-white ${imageStyle} transition duration-300 ease-in-out `}
        >
          <span>Deploy</span>
          <BiLinkExternal className='ml-2 h-6 w-6' />
        </a>
      ) : (
        <div
          className={`${imageStyle} absolute top-0 flex h-full w-full items-center justify-center bg-black/80 text-xl text-white transition duration-300 ease-in-out`}
        >
          <span>{status ?? 'No demo available'}</span>
        </div>
      )}
    </>
  )
}

export default ProjectDemo
