import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../../../Services/operations/authAPI'
import Tab from './Tab'
import { ACCOUNT_TYPE } from '../../../utils/constants'

const LoginForm = () => {
    const navigate = useNavigate();
    const dispact = useDispatch();
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const {email, password} = formData

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

    const handleOnChange = (e) =>{
        setFormData((prevData) =>({
            ...prevData,
            [e.target.name] : e.target.value,
        }))
    }
    function handleOnSubmit(e){
        e.preventDefault();
        dispact(login(email, password,navigate))
    }

    const tabData = [
        {
          id: 1,
          tabName: "Student",
          type: ACCOUNT_TYPE.STUDENT,
        },
        {
          id: 2,
          tabName: "Instructor",
          type: ACCOUNT_TYPE.INSTRUCTOR,
        },
      ]
  return (
    <div>
        <Tab tabData={tabData} field={accountType} setField={setAccountType}/>
        <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={"password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>
    </div>
  )
}

export default LoginForm