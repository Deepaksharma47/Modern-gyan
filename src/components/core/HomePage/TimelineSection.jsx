import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"

import timelineimage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: Logo1,
        Heading: "Leadership",
        Description:"Fully committed to the success company"
    },
    {
        Logo: Logo2,
        Heading: "Responsibility",
        Description:"Students will always be our top priority"
    },
    {
        Logo: Logo3,
        Heading: "Flexibility",
        Description:"The ability to switch is an important skills"
    },
    {
        Logo: Logo4,
        Heading: "Solve the problem",
        Description:"Code your way to a solution"
    }
]

const TimelineSection = () => {
  return (
    <div>
        <div className='flex flex-row gap-14 items-center justify-around'>
            <div className='flex flex-col w-[50%] gap-6' >
                {timeline.map((eve,i) => {
                    return (
                        <div key = {i} className='flex flex-row gap-7'>
                            <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-md shadow-lg'>
                                <img src={eve.Logo} alt='' />
                            </div>
                            <div>
                                <h2 className='font-semibold text-[18px]'>
                                    {eve.Heading}
                                </h2>
                                <p className='text-[12px] text-richblack-300'>{eve.Description}</p>
                            </div>
                        </div>
                    )

                })}
            </div>
            <div className='relative shadow-blue-300 '>
                <img src={timelineimage} alt='timelineimage' className='shadow-white object-cover h-[80%]'/>
                <div className='absolute bg-caribbeangreen-500 flex flex-row text-white uppercase py-6 rounded shadow-caribbeangreen-400
                translate-x-[13%] translate-y-[-50%]'>
                    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-200 px-4'>
                        <p className='text-[3xl] font-bold'>10</p>
                        <p className='text-caribbeangreen-50 text-sm'>Year of Experience</p>
                    </div>
                    <div className='flex flex-row gap-5 px-7 items-center'>
                        <p className='text-[3xl] font-bold'>250</p>
                        <p className='text-caribbeangreen-50 text-sm'>Type of Courses</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TimelineSection