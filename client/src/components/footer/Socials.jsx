export const Socials = (props) => {
  const { image, link } = props

  return (
    <a href={link} className='w-fit' target='_blank'>
      <div className="min-w-full">
        <img src={image} alt='social_image' />
      </div>
    </a>
  )
}
