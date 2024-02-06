import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signup } from '../Services/operations/authAPI';


const VerifyOtp = () => {
    const [otp, setOtp] = useState(0);
    const navigate = useNavigate();
    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const {signupData} = useSelector((state) => state.auth);

    useEffect(() =>{
        if(!signupData){
            navigate("/signup")
        }
    })

    const {accountType, firstName, lastName, email, password, confirmPassword} = signupData
    function handleOnSubmit(e){
        e.preventDefault();
        dispatch(signup(accountType, firstName, lastName, email, password, confirmPassword, otp,navigate))

    }

    function resendHandler(e){
        e.preventDefault();
        dispatch(sendOtp(email, navigate))
    }

  return (
    <div className='w-11/12 flex items-center justify-center h-[80vh]'>
        {
            loading?  (<div className='w-4/12'>
          <div className='animate-spin flex items-center justify-center my-[60%] text-2xl text-yellow-300'> Loading...</div>
        </div>) : (
            <div className=' text-white flex flex-col items-center w-[33%] gap-4'>
                <h1 className=' text-4xl font-semibold text-richblack-25'>Verify Email</h1>
                <p className=' text-[14px] text-richblack-200'>A Verification mail has been sent to you. Enter the code below</p>
                <form onSubmit={(e) => handleOnSubmit(e)} className='flex flex-col gap-3 w-full items-center'>
                    <OTPInput value={otp}
                    numInputs={6}
                    onChange={setOtp} 
                    renderSeparator={<span> -</span>}
                    renderInput={(props) => <input {...props} style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }} className='w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50' />}
                        containerStyle={{
                            justifyContent: "space-between",
                            gap: "0 6px",
                        }}
                    />
                    <button type='submit' className='w-full p-2 bg-yellow-50 rounded text-richblack-800'>
                        Verify Email
                    </button>


                </form>
                <div className='flex justify-between w-full'>
                    <Link to={"/login"}>
                        back to Login --
                    </Link>
                    <button onClick={(e)=>resendHandler(e)}>
                        Resend it--
                    </button>
                </div>
            </div>
        )
        }
    </div>
  )
}


export default VerifyOtp