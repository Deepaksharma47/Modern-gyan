import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, linkto, active}) => {
  return (
    <Link to={linkto} className={`text-center text-[13px] px-6 py-3 rounded-xl font-bold
    ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"} w-fit
    hover:scale-95 transition-all duration-200 group-hover:hover:scale-95`}>
        {children}
    </Link>
  )
}

export default Button