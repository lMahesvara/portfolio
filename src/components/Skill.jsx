const Skill = ({ image, title }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <img
        className='h-20 w-20'
        src={`src/images/skills/${image}`}
        alt={title}
      />
      <h4 className='text-center  text-white'>{title}</h4>
    </div>
  )
}

export default Skill
