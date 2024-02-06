import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighLightText from './HighLightText';
import CourseCard from './CourseCard';


const tabsName = [
    "Free", 
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);

    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard]  = useState(HomePageExplore[0].courses[0].heading)

    const setMyCards = (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
  return (
    <div className='relative flex flex-col gap-6 my-12 w-8/12 items-center
    '>
        <div className='text-4xl font-semibold text-center'>
            Unlock the 
            <HighLightText text={"Power fo code"}/>
        </div>
        <p className='text-center text-richblack-300 text-lg mt-2'>
            Learn to build anything you can imagine 
        </p>
        <div className='text-[16px] flex flex-row items-center gap-2 bg-richblack-800 cursor-pointer px-1 py-1 rounded-full my-3 w-fit'>
            {
                tabsName.map((ele, index) =>{
                    return (
                        <div key={index} className={`
                        ${currentTab === ele ? "bg-richblack-700 text-richblack-50 font-semibold " :"bg-richblack-800 text-richblack-100"} rounded-full transition-all duration-200
                        hover:bg-richblack-900 hover:scale-95 text-richblack-200 px-5 py-2 `}
                        onClick={()=> setMyCards(ele)}>
                            {ele}
                        </div>
                    )
                })
            }
        </div>

        <div className='h-[90px]'></div>
        {/* course card wala section */}
        <div className=' absolute flex flex-row justify-center gap-9 translate-y-[100%]'>
            {courses.map((ele, index) =>{
                return (
                    <CourseCard key={index}
                    cardata = {ele}
                    currentCard ={currentCard}
                    setCurrentCard = {setCurrentCard}/>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMore