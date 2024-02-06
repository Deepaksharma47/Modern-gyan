import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import { resetCourseState, setStep } from '../../../../../slices/courseSlice';
import { COURSE_STATUS } from '../../../../../utils/constants';
// import { useNavigate } from 'react-router-dom';
import { editCourseDetails } from '../../../../../Services/operations/courseDetailsAPI';

const PublishCourse = () => {

    const {register, handleSubmit, setValue, getValues} = useForm();
    const dispatch = useDispatch();
    const {course} = useSelector(state => state.course)
    const {token} = useSelector(state => state.auth)
    // const navigate = useNavigate();

    const [loading , setLoading ] = useState(false)
    
    useEffect(() =>{
        if(course?.status === COURSE_STATUS.PUBLISHED){
            setValue("public", true)
        }
    },[])

    const gotoCourses = () =>{
        dispatch(resetCourseState());
        // navigate("/dashboard/my-courses");
    }

    async function handleCoursePublish(){
        if(course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true){
            if(course?.status === COURSE_STATUS.DRAFT&& getValues("public") === false){
                gotoCourses();
            }
        }
        // if form is updated
        const formData = new FormData();

        formData.append("courseId", course._id);
        const courseStatus = getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT
        formData.append("status", courseStatus);

        setLoading(true);

        const result = await editCourseDetails(formData, token);

        if(result){
            gotoCourses()
        }
        setLoading(false);

    }

    const goBack = ()=>{
        dispatch(setStep(2))
        setValue("public", (course?.status === COURSE_STATUS.PUBLISHED) ? true : false);
    }

    const onSubmit = async () =>{
        handleCoursePublish();
    }


    return (
        <div className=' rounded-md border-[1px] bg-blue-100 p-6 border-richblack-700'>
            <p className=' text-3xl font-semibold text-richblack-5 py-4'>Publish Course</p>
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col'>
                <div className="">
                    <label htmlFor='public' className='flex gap-3 items-center'>
                    <input
                        type='checkbox'
                        id='public'
                        {...register("public")}
                        className='rounded h-4 w-4'
                    />
                    <span>Make this course As Public</span>  
                    </label>
                    
                    
                </div>
                <div  className='flex justify-end gap-8 '>
                    <button
                        disabled={loading}
                        type='button'
                        onClick={goBack}
                        className=' rounded-md bg-richblack-300 px-5 font-semibold'>
                            Back
                    </button>
                    <IconBtn text='Save' disabled={loading} type={'submit'}/>
                    
                </div>
            </form>
        </div>
    )
}

export default PublishCourse