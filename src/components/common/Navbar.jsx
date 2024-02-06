import React, { useEffect, useState } from 'react'
import { Link, matchPath } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
import ProfileDropDown from '../core/auth/ProfileDropDown'
import { apiConnector } from '../../Services/apiconnector'
import { categories } from '../../Services/apis'
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Navbar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);

    // const subLinks = [
    //     {
    //         title: "python",
    //         link:"/catalog/python"
    //     },
    //     {
    //         title: "web dev",
    //         link:"/catalog/web-development"
    //     },
    // ];

    const [subLinks , setSubLinks] = useState([])

    const fetchSublinks = async() =>{
            try{
                const result = await apiConnector("Get", categories.CATEGORIES_API);
                setSubLinks (result.data.data)
            }
            catch(error) {
                console.log("could not fetch the category list");
            }
        }

    useEffect( () =>{    
        fetchSublinks()
    },[])

    const location = useLocation();
    const matchRoute = (route) =>{
        return matchPath({path:route}, location.pathname)
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-600'>
        <div className=' flex w-11/12 max-w-maxContent items-center justify-between'>
            {/* add logo */}
            <Link to={"/"}>
                <div className='moderngyan font-semibold text-lg text-richblack-50 tracking-wider border-richblack-700 border-[1px] rounded-full px-6 py-1'>
                    Modern Gyan
                </div>
            </Link>

            {/* Nav link */}
            <nav>
                <ul className='flex flex-row text-richblack-200 gap-4 '>
                    {NavbarLinks.map((ele,index) =>{
                            return (
                                <li key={index}>
                                    {
                                        ele.title === "Catalog" ? (
                                            <div className=' relative group flex items-center gap-2 cursor-pointer text-richblack-400'>
                                                <p>
                                                    {ele.title}
                                                </p>
                                                <IoIosArrowDropdownCircle/>

                                                <div className=' invisible absolute left-[50%]
                                                         translate-y-[25%]
                                                    top-[50%]
                                                    flex flex-col rounded-md bg-richblack-5 px-4 text-richblack-900
                                                    opacity-0 transition-all duration-200 group-hover:visible
                                                    group-hover:opacity-100 lg:w-[300px] z-10 items-center group-hover:translate-x-[-50%]'>

                                                    <div className='absolute left-[50%] top-0
                                                    translate-x-[80%] z-5
                                                    translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                                    </div>

                                                    {
                                                        subLinks.length ? (
                                                                subLinks.map( (subLink, index) => (
                                                                    <Link to={`/catalog/${(subLink.name).split(" ").join("-").toLowerCase()}`} key={index}>
                                                                        <p className=' z-15 tracking-wider w-[290px] text-center border-b-2 py-2 transition-all duration-200  border-richblack-500
                                                                         hover:bg-richblack-300'>{subLink.name}</p>
                                                                    </Link>
                                                                ) )
                                                        ) : (<div></div>)
                                                    }

                                                </div>


                                            </div>
                                        ): (
                                            <Link to={ele?.path} className={`${ matchRoute(ele?.path) ? " text-yellow-300":
                                            " text-richblack-400"} hover:bg-richblack-700 px-2 py-1 rounded-full`}>
                                                {ele.title}
                                            </Link>
                                        )
                                    }
                                </li>
                            )
                        })}
                </ul>
            </nav>

            {/* login/signup/Dashboard */}
            <div className=' gap-x-4 items-center text-richblack-200 flex '>
                {
                    user && user?.accountType !== "Instructor" && (
                        <Link to="/dashboard/cart" className='relative'>
                            <FaCartShopping/>
                            {
                            totalItems > 0 && (
                                <span>
                                    {totalItems}
                                </span>
                            )
                        }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/login"}>
                            <button className=' border-richblack-600 bg-richblack-700 px-[10px] py-[4px] border-2 rounded
                             text-richblack-200 hover:scale-90 hover:border-pink-200 transition-all duration-200'>
                                Log In
                            </button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/signup"}>
                            <button className=' border-richblack-600 bg-richblack-700 px-[10px] py-[4px] border-2 rounded
                             text-richblack-200  hover:scale-90 hover:border-pink-200 transition-all duration-200'>
                                Sign Up
                            </button>
                        </Link>
                    )
                }
                {
                    token !== null && <ProfileDropDown/>
                    
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar