export const Contact = (props) => {
  const { text, icon } = props

  return (
    <div className='flex gap-2 items-center mt-2'>
      <div>
        <img src={icon} alt={text} />
      </div>
      <div className="max-w-48">
        <p>{text}</p>
      </div>
    </div>
  )
}
