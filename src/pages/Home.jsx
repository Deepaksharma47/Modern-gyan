import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import HighLightText from "../components/core/HomePage/HighLightText"
import CtaButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import Footer from "../components/common/Footer"
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructionSection from '../components/core/HomePage/InstructionSection';
import  ExploreMore  from '../components/core/HomePage/ExploreMore';

const Home = () => {
  return (
    <div>
        {/* create section one */}
        <div className=' relative mx-auto flex flex-col w-11/12 items-center text-sm shadow-md text-white
            justify-between pb-8'>
            <Link to={"signup"}>
                <div className='group mt-14 p-2 mx-auto rounded-full bg-richblack-600 font-bold text-richblack-100
                transition-all duration-200 hover:scale-95 shadow-inner w-fit '>
                    <div className='flex flex-row gap-2 items-center rounded-full px-7 py-[5px] transition-all duration-200 
                    group-hover:bg-richblack-800 group-hover:shadow-lg'>
                        <p>Become an Instructor </p> <FaArrowRightLong />
                    </div>
                </div>
            </Link>
            <div className='text-center text-3xl font-semibold mt-5 '>
                Empower Your Future with
                <HighLightText text="Coding Skills "/>
            </div>
            <div className='w-[60%] text-center mt-6 text-sm font-bold text-richblack-300'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resourses, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CtaButton linkto={"/signup"} active={true}>
                    Learn More
                </CtaButton>
                <CtaButton linkto={"/login"} active={false}>
                    Book a Demo
                </CtaButton>
            </div>

            <div className='shadow-blue-200 mx-3 mt-12  w-[60%] border-b-8 border-white border-r-8 '>
                <video muted loop autoPlay>
                    <source src={Banner} type='video/mp4'/>
                </video>
            </div>

            {/* code section one */}
            {/* Code Section 1 */}
            <div className='w-[70%]'>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock Your
                            <HighLightText text={"Coding Potential"}/>
                            with our online courses
                        </div>
                    }
                    subheading = {
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText: "try it yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "learn more",
                            linkto: "/login",
                            active: false,
                        }
                    }

                    codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                    codeColor={"text-richblack-200"}
                />
            </div>

                    {/* Code Section 2 */}
            <div className='w-[70%]'>
                <CodeBlocks 
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock Your
                            <HighLightText text={"coding potential"}/>
                            with our online courses
                        </div>
                    }
                    subheading = {
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText: "try it yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "learn more",
                            linkto: "/login",
                            active: false,
                        }
                    }

                    codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                    codeColor={"text-yellow-25"}
                />
            </div>
            <ExploreMore/>
        </div>


        {/* create section two */}
        <div className='flex flex-col bg-pure-greys-5 text-richblack-700 justify-center items-center'>
           <div className='homepage_bg h-[310px] w-[100%] '>
                <div className='w-11/12 max-w-maxContent flex flex-col items-center mx-auto mt-8'>
                    <div className='h-[75px]'>

                    </div>
                    <div className='flex flex-row gap-10 text-white mt-12'>
                        <CtaButton active={true} linkto={"signup"} >
                            <div className='flex flex-row items-center gap-3'>
                                Explore Full Catelog
                                <FaArrowRightLong/>
                            </div>
                            
                        </CtaButton>
                        <CtaButton active={false} linkto={"login"} >
                            <div className='flex flex-row items-center gap-3'>
                                Learn More
                            </div>
                            
                        </CtaButton>

                    </div>
                </div>

           </div>

           <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-center gap-6 my-10'>
                <div className='flex flex-row gap-5 justify-around mb-3 w-[80%]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skill you need for a 
                        <HighLightText text={"Job that is in demand"}/>
                    </div>
                    <div className='flex flex-col gap-10 w-[45%] items-start'>
                        <div className='text-[16px]'>
                            The ModernGyan is the dictates its own terms, Today, to be a competitive 
                            specialist requires more than professional skills.
                        </div>
                        <CtaButton active={true} linkto={"signup"}>
                            Learn More
                        </CtaButton>
                        
                    </div>
                </div>
                <TimelineSection/>
                <LearningLanguageSection/>
            </div>

        </div>
        

        {/* create section three */}
        <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-7
        bg-richblack-900 text-white'>
                <InstructionSection/>
                <h2 className='text-center text-4xl font-semibold mt-10 text-richblack-200'>
                Review from other learners
                </h2>

                {/* Review slider here */}

        </div>


        {/* create section four */}


        {/* create footer same as every page */}
        <div>
            <Footer/>
        </div>


    </div>
  )
}

export default Home