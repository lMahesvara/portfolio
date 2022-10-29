import Lottie from 'lottie-react'
import lottieImage from '../images/web-dev.json'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Home = () => {
  return (
    <section className='mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl flex-col items-center justify-center gap-6 px-4 md:flex-row md:justify-between'>
      <article className='flex flex-col items-center gap-5 md:items-start'>
        <h1 className='text-tert  text-3xl font-black text-primary-500 sm:text-5xl '>
          Erick Bernal Amparano
        </h1>
        <h3 className='text-quaternary text-center text-xl dark:text-gray-300 sm:text-3xl md:text-left '>
          Software Engineer
        </h3>
        <div className='flex items-center justify-center gap-2'>
          <a
            href='https://github.com/lMahesvara'
            target='_blank'
            rel='noreferrer noopener'
          >
            <AiFillGithub className='h-8 w-8 text-red-50 transition-all duration-300 hover:h-10 hover:w-10 hover:text-primary-200' />
          </a>
          <a
            href='https://github.com/lMahesvara'
            target='_blank'
            rel='noreferrer noopener'
          >
            <AiFillLinkedin className='h-8 w-8 text-red-50 transition-all duration-300 hover:h-10 hover:w-10 hover:text-primary-200' />
          </a>
        </div>
        <a
          href=''
          className='rounded-md bg-primary-500 px-4 py-2 font-inter font-bold text-black transition  duration-300 ease-in-out hover:bg-primary-200'
        >
          Descargar CV
        </a>
      </article>
      <article className='flex w-full justify-center md:w-1/2'>
        <Lottie
          className='min-h-96 w-96 md:min-h-full md:w-full'
          animationData={lottieImage}
          loop={true}
          onAnimationStart={() => console.log('Animation started')}
        />
      </article>
    </section>
  )
}

export default Home
