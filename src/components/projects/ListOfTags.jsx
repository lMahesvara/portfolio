const ListOfTags = ({ tags }) => {
  return tags?.map((tag, index) => (
    <span
      key={index}
      className='rounded-full bg-primary-300 px-2 py-1 text-xs font-semibold text-black'
    >
      {tag}
    </span>
  ))
}

export default ListOfTags
