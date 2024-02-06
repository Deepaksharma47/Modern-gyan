import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {FiTrash2} from "react-icons/fi"
import ConfirmationModal from '../../../common/ConfirmationModal';
// import { deleteProfile } from '../../../../Services/operations/settingsAPI';
import toast from 'react-hot-toast';
import { apiConnector } from '../../../../Services/apiconnector';
import { logout } from '../../../../Services/operations/authAPI';
import { settingsEndpoints } from '../../../../Services/apis';

export const DeleteAccount = () => {
  const {token} = useSelector(state => state.auth)
  const dispatch =  useDispatch();
  const navigate = useNavigate();

  const [confirmationModalData, setModalData] = useState(null)

  async function handleDeleteAccount(){
      const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", settingsEndpoints.DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Deleted Successfully")
      dispatch(logout(navigate))
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Delete Profile")
    }
    toast.dismiss(toastId)
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 pt-6 pb-2 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-1">
          <h2 className="text-lg font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-3/5 text-pink-25">
            <p>Would you like to delete account?</p>
            <p className=' text-sm'>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-pink-300"
            onClick={()=>setModalData({
              text1:"Are You Sure",
              text2:"You Will be Deleted from this website",
              btn1Text:"Delete",
              btn1customClasses:" bg-pink-500",
              btn2Text:"Cancel",
              btn1Handler:()=>{handleDeleteAccount()},
              btn2Handler:() => {
                setModalData(null)
              }
            })}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
      <div>
        {
          confirmationModalData && <ConfirmationModal modalData={confirmationModalData}/>
        }
      </div>
    </>
  )
}
