import React from 'react'
import { useSelector } from 'react-redux'

export const ChangeProfilePicture = () => {
    const {user} = useSelector(state=>state.profile)
  return (
    <>
        <div  className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-5 px-12 text-richblack-5">
            <div>
                <img src={user?.image}
                    alt={`profile-${user?.firstName}`}
                    className="aspect-square w-[45px] rounded-full object-cover"
                    />
            </div>
        </div>
    </>
  )
}
