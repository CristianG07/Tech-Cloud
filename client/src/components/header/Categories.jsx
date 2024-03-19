import { Link } from "react-router-dom"

export const Categories = ({ text, link }) => {
  return (
    <div className="text-base text-dark">
      <Link to={`/brand${link}`}>{text}</Link>
    </div>
  )
}
