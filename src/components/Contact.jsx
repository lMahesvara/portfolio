import SectionTitle from './SectionTitle'

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <section
      id='contact'
      className='mx-auto mt-16 mb-8 flex h-[90vh] w-full max-w-6xl flex-col items-center gap-16 pt-4'
    >
      <SectionTitle>Contact</SectionTitle>
      <form
        onSubmit={handleSubmit}
        className='flex w-full max-w-3xl flex-col items-start gap-4 px-4 pb-4
        '
      >
        <div className='flex w-full flex-col items-start gap-3'>
          <label htmlFor='name' className='font-inter text-white'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className=' w-full rounded-md border-2 border-primary-500 bg-transparent p-2 px-4 text-white focus:outline-none'
            placeholder='Write your name'
            required
          />
        </div>
        <div className='flex w-full flex-col items-start gap-3'>
          <label htmlFor='email' className='font-inter text-white'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className=' w-full rounded-md border-2 border-primary-500 bg-transparent p-2 px-4 text-white focus:outline-none'
            placeholder='Write your email'
            required
          />
        </div>
        <div className='flex w-full flex-col items-start gap-3'>
          <label htmlFor='message' className='font-inter text-white'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            rows='8'
            className=' block w-full resize-none appearance-none rounded-md border-2 border-primary-500 bg-transparent p-2 px-4 text-white focus:outline-none'
            placeholder='Write your message'
            required
            minLength={10}
          />
        </div>
        <button
          type='submit'
          className='rounded-md bg-primary-500 px-4 py-2 font-inter font-bold text-black transition duration-300 ease-in-out hover:bg-primary-200'
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
