import { Link } from "react-router-dom"

export const Categories = ({ text, link, setToggle }) => {
  return (
    <div className="text-sm sm:text-base">
      <Link onClick={() => setToggle(false)} to={`/brand${link}`}>{text}</Link>
    </div>
  )
}
