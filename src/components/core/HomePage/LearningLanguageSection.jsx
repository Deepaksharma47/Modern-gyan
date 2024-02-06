import React from 'react'
import HighLightText from "./HighLightText"
import knowyourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOther from "../../../assets/Images/Compare_with_others.png"
import planYoruLesson from "../../../assets/Images/Plan_your_lessons.png"
import CtaButton from "../../core/HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div>
      <div className='flex flex-col gap-2 w-11/12 my-10 items-center'>
        <div className='text-4xl font-semibold text-center '>
          Your Swiss Knife for <HighLightText text={"learning any Language"}/>
        </div>
        <div className='text-center w-[50%] text-richblack-300 mx-auto mt-2 text-base font-medium'>
          Using Spin making learing multiple languages easy. with 20+ languages
           realistic voice-over,
           progress tracking, custom schedule and more.
        </div>

        <div className=' flex flex-row items-center justify-center mt-4 w-[80%] mx-auto'>
          <img src={knowyourProgress} alt='' className='-mr-32'/>
          <img src={compareWithOther} alt='' className=''/>
          <img src={planYoruLesson} alt='' className='-ml-40 '/>
        </div>
        <div className=' '>
          <CtaButton active={true} linkto={"/signup"}>
            Learn more
          </CtaButton>
        </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection