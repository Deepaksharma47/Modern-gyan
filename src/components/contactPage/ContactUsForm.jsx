import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../Services/apiconnector';
import { contactusEndpoint } from '../../Services/apis';
import toast from 'react-hot-toast';

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors, isSubmitSuccessfull}
    } = useForm();

    const submitContactForm = async(data) =>{
        console.log("Logging Data", data);
        const toastId = toast.loading("Loading...");
        try{
            setLoading(true);
            const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API,data)
            console.log("Logging responce", response);
            if(!response.data.success){
                throw new Error (response.data.message)
            }
            toast.success("Message Sent")
            setLoading(false)

        } catch(error){
            console.log("Error", error.message);
            setLoading(false)
        }

        toast.dismiss(toastId)

    }

    useEffect( () =>{
        if(isSubmitSuccessfull){
            reset({
                email:"",
                firstName:"",
                lastName:"",
                message:"",
                phoneNo:""
            })
        }
    },[isSubmitSuccessfull,reset]);
  return (
    <div>
        {
            loading ? (<div className='w-4/12'>
            <div className='animate-spin flex items-center justify-center my-[400%] text-2xl text-yellow-300'> Loading...</div>
            </div>) :(<form onSubmit={handleSubmit((data) =>submitContactForm(data))} className=' gap-5 flex flex-col mb-7  items-center mx-auto'>
            <div className='flex gap-6 w-full'>
            {/* firstName */}
            <div className='flex flex-col'>
                <label htmlFor='firstName'> First Name</label>
                <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='Enter first name'
                    {...register("firstName", {required:true})}
                    className=' bg-richblack-500 p-2 rounded'
                />
                {
                    errors.firstName && <span>Please enter your name</span>
                }
            </div>
            {/* lastName */}
            <div className='flex flex-col'>
                <label htmlFor='lastName'> Last Name</label>
                <input
                    type='text'
                    name='lastName'
                    id='lastName' 
                    placeholder='Enter last name'
                    {...register("lastName" ,{required:true})}
                    className=' bg-richblack-500 p-2 rounded'
                />
                {
                    errors.lastName && <span>Please enter last name</span>
                }
            </div>
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='email'>Email Address</label>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter email Address'
                {...register("emial", {required:true})}
                className=' bg-richblack-500 p-2 rounded w-full'
            />
            {
                errors.email && (
                    <span>
                        Please enter your email address
                    </span>
                )
            }
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor='phoneNo'>Contact Number</label>
            <input
                type='number'
                name='phoneNo'
                id='phoneNo'
                placeholder='1234567890'
                {...register("phoneNo",{required:true,maxLength:{value:10,message:"Invalid Phone Number"}})}
                className=' bg-richblack-500 p-2 rounded'
            />
            {
                errors.phoneNo && (
                    <span>{errors.phoneNo.message}</span>
                )
            }
        </div>

            <div className='flex flex-col items-center w-full'>
                <label htmlFor='message'>Message</label>
                <textarea
                    name='message'
                    id='message'
                    cols={30}
                    rows={7}
                    placeholder='Enter Your message here'
                    {...register("message",{required:true})}
                    className=' bg-richblack-400 p-2 rounded w-full'
                />
                {
                    errors.message && (
                        <span>Please Enter Your Message Here</span>
                    )
                }

            </div>
            <button type='submit' className='rounded-md bg-yellow-50 p-3 text-richblack-900 w-full'>
                Send Message
            </button>

    </form>)
        }
    </div>
  )
}

export default ContactUsForm