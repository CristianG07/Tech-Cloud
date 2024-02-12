import { Link } from "react-router-dom"

export const Categories = ({ text, link }) => {
  return (
    <div className="text-sm sm:text-base">
      <Link to={link}>{text}</Link>
    </div>
  )
}
