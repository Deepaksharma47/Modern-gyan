import React from 'react'
import *as Icons from "react-icons/vsc"
// import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const SidebarLink = ({link, iconName}) => {
    const Icon = Icons[iconName];
    const location = useLocation();
    // const dispatch = useDispatch

    const matchRoute = (route) =>{
        return matchPath({path:route} , location.pathname)
    }
  return (
    <NavLink to={link.path}
    // onClick={}
    className={`${matchRoute(link.path) ? " border-l-4 border-yellow-50 bg-richblack-600 text-yellow-100 text-sm":" text-richblack-200  text-sm font-medium"} 
     py-1`}
    >
        <div className='flex gap-3 items-center justify-center p-1'>
            <Icon className=" text-lg"/>
            <span className={``}>{link.name}</span>

        </div>

    </NavLink>
  )
}

export default SidebarLink