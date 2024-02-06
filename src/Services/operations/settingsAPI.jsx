import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { settingsEndpoints } from "../apis";
import { logout } from "./authAPI";


export async function changePassword(token, formData, navigate){
    const toastId = toast.loading("Loading....")
    try{
        const response = await apiConnector("POST",settingsEndpoints.CHANGE_PASSWORD_API,formData,
        {
            Authorization:`Bearer ${token}`
        })

        if (!response.data.success) {
            throw new Error(response.data.message)
          }

        toast.success("Password Changed Successfully")

    } catch(error){
        console.log("CHANGE-PASSWORD API ERROR......", error)
        toast.error(error.response.data.message)
    }
    toast.dismiss(toastId);
}

export async function deleteProfile(token, navigate) {
    return async (dispatch) =>{
        const toastId = toast.loading("Loading...")
        try{
            const response = await apiConnector("DELETE", settingsEndpoints.DELETE_PROFILE_API, null, {
                Authorization: `Bearer ${token}`,
              })
              console.log("DELETE_PROFILE_API API RESPONSE............", response)
        
              if (!response.data.success) {
                // console.log("yah aya error")
                throw new Error(response.data.message)
              }
              toast.success("Profile Deleted Successfully")
              dispatch(logout(navigate))

        } catch(error){
            console.log("Delete_APi API ERROR............", error)
            toast.error("Could Not Delete Profile")
        }
        toast.dismiss(toastId)
    }
}