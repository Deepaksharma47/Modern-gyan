import React from 'react'

const CourseCard = ({
    cardata, currentCard, setCurrentCard
}) => {
  return (
    <div className={`flex flex-col justify-between gap-6 py-3 lg:h-[240px]
    ${currentCard === cardata.heading ? " bg-richblack-5 text-richblack-300  shadow-yellow-200 shadow-lg":
    " bg-richblack-700 text-richblack-200"} pt-5 px-4 w-[30%] rounded `}
    onClick={()=>setCurrentCard(cardata.heading)}>
        <div className='flex flex-col gap-2'>
            <h2 className=' text-[16px] font-semibold'>
                {cardata.heading}
            </h2>
            <div>
                {cardata.description}
            </div>
        </div>
        <div className={`flex flex-row justify-between  border-t-richblack-600
        ${currentCard === cardata.heading ? " text-blue-200":""}`}>
            <div>
                {cardata.level}
            </div>
            <div>
                {cardata.lessionNumber} Lessons
            </div>
        </div>
    </div>
  ) 
}

export default CourseCard