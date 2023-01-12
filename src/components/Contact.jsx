import { useContext } from 'react'
import SectionTitle from './SectionTitle'
import LanguageContext from '../context/LanguageContext'

const Contact = () => {
  const { texts } = useContext(LanguageContext)
  const { contact } = texts
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <section
      id='contact'
      className='mx-auto mt-16 mb-8 flex h-[90vh] w-full max-w-6xl flex-col items-center gap-16 pt-4'
    >
      <SectionTitle>{contact.title}</SectionTitle>
      <form
        onSubmit={handleSubmit}
        className='flex w-full max-w-3xl flex-col items-start gap-4 px-4 pb-4
        '
      >
        <div className='flex w-full flex-col items-start gap-3'>
          <label htmlFor='name' className='font-inter text-white'>
            {contact.name}
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className=' w-full rounded-md border-2 border-primary-500 bg-transparent p-2 px-4 text-white focus:outline-none'
            placeholder={contact.namePlaceholder}
            required
          />
        </div>
        <div className='flex w-full flex-col items-start gap-3'>
          <label htmlFor='email' className='font-inter text-white'>
            {contact.email}
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className=' w-full rounded-md border-2 border-primary-500 bg-transparent p-2 px-4 text-white focus:outline-none'
            placeholder={contact.emailPlaceholder}
            required
          />
        </div>
        <div className='flex w-full flex-col items-start gap-3'>
          <label htmlFor='message' className='font-inter text-white'>
            {contact.message}
          </label>
          <textarea
            name='message'
            id='message'
            rows='8'
            className=' block w-full resize-none appearance-none rounded-md border-2 border-primary-500 bg-transparent p-2 px-4 text-white focus:outline-none'
            placeholder={contact.messagePlaceholder}
            required
            minLength={10}
          />
        </div>
        <button
          type='submit'
          className='rounded-md bg-primary-500 px-4 py-2 font-inter font-bold text-black transition duration-300 ease-in-out hover:bg-primary-200'
        >
          {contact.submit}
        </button>
      </form>
    </section>
  )
}

export default Contact
