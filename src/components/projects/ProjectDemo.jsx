import { BiLinkExternal } from 'react-icons/bi'

const ProjectDemo = ({ demo, status, image }) => {
  const imageStyle = image
    ? 'opacity-0 hover:opacity-100'
    : 'opacity-100 hover:opacity-0'

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
