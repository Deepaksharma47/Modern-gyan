import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { resetPassword } from '../Services/operations/authAPI';

function UpdatePassword() {
    const navigate = useNavigate
    const location = useLocation();
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        password:"",
        confirmPassword:""
    })

    const {password, confirmPassword} = formData
     
    function handleOnChange(e){
        setFormData((prev) =>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword(password,confirmPassword, token, navigate))

    }

  return (
    <div className='flex justify-center items-center h-[80vh]'>
        {
            loading ? (<div className='w-4/12'>
          <div className='animate-spin flex items-center justify-center my-[60%] text-2xl text-yellow-300'> Loading...</div>
        </div>) : (
            <div className=' text-richblack-100 w-[26vw] mx-auto flex flex-col gap-4'>
                <h1 className='text-4xl font-semibold text-richblack-25'>
                    Choose new Password
                </h1>
                <p className='text-[14px] text-richblack-300'>Almost done. Enter your new password here and you'r all set</p>

                <form onSubmit={(e) => handleOnSubmit(e)} className='flex flex-col gap-3'>
                    <label>
                        <p>
                            New Password
                        </p>
                        <input type ="password" name='password' value={password} onChange={handleOnChange} placeholder='Enter password' 
                            className='w-full bg-richblack-400 p-2 rounded text-richblack-25'
                        />
                    </label>
                    <label>
                        <p>
                            Confirm Password
                        </p>
                        <input type ="password" name='confirmPassword' value={confirmPassword} onChange={handleOnChange} placeholder='confirm password'
                            className='w-full  bg-richblack-400 p-2 rounded text-richblack-25'
                        />
                    </label>
                    <button type='submit' className=' w-full bg-yellow-50 rounded text-richblack-900 p-2'>
                        Reset Password
                    </button>
                </form>
                <Link to={"/login"}>
                    -- Back to login
                </Link>
            </div>
        )
        }
    </div>
  )
}

export default UpdatePassword