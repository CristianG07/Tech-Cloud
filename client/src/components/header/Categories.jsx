import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setOpenSidebar } from "@/redux/products/toggleSlice"

export const Categories = ({ text, link }) => {
  const dispatch = useDispatch()

  return (
    <div className="text-sm text-dark">
      <Link onClick={() => dispatch(setOpenSidebar(false))} to={`/brand${link}`}>{text}</Link>
    </div>
  )
}
