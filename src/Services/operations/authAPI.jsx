import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"


const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints


export const sendOtp = (email, navigate) =>{
    return async (dispact) =>{
        const toastId = toast.loading("loading...");

        dispact(setLoading(true))

        try{
            const responce = await apiConnector("post", SENDOTP_API,{
                email,
                checkUserPresent:true,
            })
            console.log("send otp api RESPONCE......." , responce);
            console.log(responce.data.success)

            if(!responce.data.success) {
                throw new Error(responce.data.message)
            }
            toast.success("OTP Sent Successfully")
            navigate("/verify-email")
        } catch(error){
            console.log("Sendotp api errro...")
            toast.error("Could not send api")
        }
        dispact(setLoading(false))
        toast.dismiss(toastId)

    }
}

export function signup(accountType, firstName, lastName, email, password, confirmPassword, otp,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("loading....")
        dispatch(setLoading(true));
        try{
            const responce  = await apiConnector("POST", SIGNUP_API,{accountType, firstName, lastName, email, password, confirmPassword, otp} ) 
            console.log("SIGNUP RESPONCE......." , responce)
            if(!responce.data.success){
                throw new Error(responce.data.message)
            }
            toast.success("Signup Successful")
            navigate("/login")

        } catch(error){
            console.log("PROBLEM IN SIGNUP",error)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}
// export function sendOtp(email, navigate) {

//     return async (dispact) =>{
//         const toastId = toast.loading("loading...");

//         dispact(setLoading(true))

//         try{
//             const responce = await apiConnector("post", SENDOTP_API,{
//                 email,
//                 checkUserPresent:true,
//             })
//             console.log("send otp api RESPONCE......." , responce);
//             console.log(responce.data.success)

//             if(!responce.data.success) {
//                 throw new Error(responce.data.message)
//             }
//             toast.success("OTP Sent Successfully")
//             navigate("/verify-email")
//         } catch(error){
//             console.log("Sendotp api errro...")
//             toast.error("Could not send api")
//         }

//         toast.dismiss(toastId)

//     }
// }

export function login (email, password,navigate){
    return async (dispatch) =>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));
        
        try{
            const responce = await apiConnector("POST",LOGIN_API,{
                email,
                password
            })

            console.log("LOGIN API RESPONCE.........", responce)

            if(!responce.data.success){
                throw new Error (responce.data.message)
            }

            toast.success("login successful")
            dispatch(setToken(responce.data.token))
            const userImage = responce.data?.user?.image
            ? responce.data.user.image
            : `https://api.dicebear.com/5.x/initials/svg?seed=${responce.data.user.firstName} ${responce.data.user.lastName}`

            responce.data.user.image = userImage;

            console.log(responce?.data?.user)

            dispatch(setUser(responce.data.user))
            
            localStorage.setItem("token", JSON.stringify(responce.data.token))
            localStorage.setItem("user", JSON.stringify(responce.data.user))
            navigate("/dashboard/my-profile")
        } catch(error){
            console.log("LOGIN API ERROR......", error);
            console.log("LOGIN Failed")
        }

        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function logout (navigate){
    return (dispatch) =>{
        dispatch(setToken(null));
        dispatch(setUser(null))
        dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("logged Out")
        navigate("/")
    }
}

export function getPasswordResetToken (email, setEmailSent){
    return async (dispatch) => {
        // const toastId = toast.loading("sending mail...")
        dispatch(setLoading(true))
        try{
            
            const responce = await apiConnector("POST",RESETPASSTOKEN_API, {email,} )
            console.log("RESET PASSWORD TOKEN RESPONCE", responce)

            if(!responce.data.success){
                throw new Error(responce.data.message)
            }

            toast.success("Email successfully sent")
            setEmailSent(true);
        } catch(error){
            console.log("RESET PASSWORD TOKEN Eerror",error)
        }
        // toast.dismiss(toastId)
        dispatch(setLoading(false));
    }
}

export function resetPassword(password, confirmPassword, token,navigate){
    return async(dispatch) =>{
        dispatch(setLoading(true));
        try{
            const responce = await apiConnector("POST", RESETPASSWORD_API,{password,confirmPassword, token}) 
            if(!responce.data.success){
                throw new Error(responce.data.message)
            }
            console.log("PASSWORD SUCCESSFULLY Changed", responce.data)

            toast.success("Password Successfully changed")

        } catch(error){
            console.log("RESET PASSWORD FAILED",error)
        }
        
        dispatch(setLoading(false));
        navigate("/login")
    }
}