import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import CtaButton from "../components/core/HomePage "
import { getPasswordResetToken } from '../Services/operations/authAPI';

const ForgotPassword = () => {
  const [emialSent, setEmailSent] = useState(false);
  const {loading} = useSelector((state) => state.auth);
  const [email,setEmail] = useState("")
  const dispatch = useDispatch()

  const onSubmitHandler=(e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken( email, setEmailSent)) 
  }
  return (
    <div className='text-white w-11/12 flex justify-center h-[100vh]'>
      {
        loading ? (<div className='w-4/12'>
          <div className='animate-spin flex items-center justify-center my-[60%] text-2xl text-yellow-300'> Loading...</div>
        </div>) :(
        <div className=' w-4/12 h-fit flex flex-col gap-6 my-[10%]'>
            <h1 className=' text-4xl font-semibold'>
              {
                !emialSent? "Reset your Password" :"Check Your Email"
              }
            </h1>
            <p className=' text-[14px] text-richblack-100'>
              {
                !emialSent 
                ? "Have no fear. We'll email you instructions to reset your password, If youdon't have access to your email we can try account recovery" :
                 `We have sent the reset email to ${email}`
              }
            </p>

            <form  className='flex flex-col w-full gap-3' onSubmit={(e) =>onSubmitHandler(e)}>
              {
                !emialSent && (
                  <label>
                    <p className='text-[14px]'>Email Address</p>
                    <input
                      required
                      type="email"
                      name='email'
                      value = {email}
                      onChange={(e) =>setEmail(e.target.value)}
                      placeholder='Enter Your Email Address'
                      className='w-full bg-richblack-400 px-2 py-2 rounded'
                    />
                  </label>
                )
              }
              <button type='submit' className='w-full bg-yellow-100 p-2 rounded text-richblack-900'>
                {
                  !emialSent ? "Reset Password" :"Resend Mail"
                }
              </button>
            </form>

            <div>
              <Link to={"/login"}>
                <p>-- Back to login </p>
              </Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ForgotPassword