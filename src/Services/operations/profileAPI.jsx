import toast from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { settingsEndpoints } from "../apis"
import { setUser } from "../../slices/profileSlice"
import { profileEndpoints } from "../apis"

const {UPDATE_PROFILE_API} = settingsEndpoints

export function updateProfile (token, formData) {
    return async (dispatch) =>{
        const toastId = toast.loading("Loading...")

        try{
            const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData,
            {
                Authorization:`Bearer ${token}`
            }
            )

            console.log("UPDATE_PROFILE_API API RESPONSE............", response)

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            // const userImage = response.data.updatedUserDetails.image
            // ? response.data.updatedUserDetails.image
            // : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
            
            const userDetail = JSON.parse(localStorage.getItem("user"));
            userDetail.additionalDetails = response.data.profile;
            // userDetail.image = userImage
            localStorage.setItem("user", JSON.stringify(userDetail))

            dispatch(setUser(userDetail))
            toast.success("Profile Update Successfully")
            
        } catch(error){
            console.log("UPDATE_PROFILE_API ERROR.........", error)
            toast.error("Could not update Profile")
        }
        toast.dismiss(toastId);
    }
}

export async function getUserEnrolledCourses(token) {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector(
        "GET",
        profileEndpoints.GET_USER_ENROLLED_COURSES_API,
        null,
        {
            Authorization: `Bearer ${token}`,
        }
      )
      // console.log(
      //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
      //   response
      // )
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
    } catch (error) {
      console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
      toast.error("Could Not Get Enrolled Courses")
    }
    toast.dismiss(toastId)
    return result
  }