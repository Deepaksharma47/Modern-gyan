import React from 'react'
import InstructorImage from "../../../assets/Images/Instructor.png"
import HighLightText from './HighLightText'
import CtaButton from '../../core/HomePage/Button'
// import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'

const InstructionSection = () => {
  return (
    <div className='mt-16'>
    <div  className='flex flex-row gap-20 items-center'>
        <div className='w-[50%] border-richblack-400 shadow-pure-greys-300 shadow-lg border-[15px] '>
            <img
                src={InstructorImage}
                alt='Instructor_Image'
            />
        </div>
        <div className='w-[50%] flex flex-col gap-10'>
            <div className= 'text-4xl font-semibold flex flex-col'>
                Become an
                <HighLightText text={"Instructor"}/>
            </div>
            <p className='font-medium text-[16px] w-[80%] text-richblack-300  '>
                Instructor from around the world teach millions of students on ModernGyan. We provide the
                 tools and skills to teach what you love.
            </p>
            <div className='w-fit flex flex-row'>
                <CtaButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight/>
                    </div>
                </CtaButton>
                </div>
        </div>
    </div>

    </div>
  )
}

export default InstructionSection