import React from 'react'
import { ChangeProfilePicture } from './ChangeProfilePicture'
import  UpdatePassword  from './UpdatePassword'
import { DeleteAccount } from './DeleteAccount'
import { EditProfile } from './EditProfile'


export default function SettingPage() {
  return (
    <>
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
        </h1>
        {/* Change Profile Picture */}
        <ChangeProfilePicture />
        {/* Profile */}
        <EditProfile />
        {/* Password */}
        <UpdatePassword />
        {/* Delete Account */}
        <DeleteAccount />
    </>
  )
}
