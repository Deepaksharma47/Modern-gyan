import React from 'react'
import HighLightText from "../components/core/HomePage/HighLightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Ouote from '../components/core/AboutPage/Ouote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import StatsComponent from '../components/core/AboutPage/StatsComponent'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <div className='w-full flex flex-col gap-3 mt-6'>
        {/* section 1 */}
        <section>
        <div className='flex flex-col pt-5  gap-4 mx-auto items-center bg-richblack-700 h-[50vh]'>
            <header className=' text-richblack-5 w-[50%] text-center font-semibold text-4xl'>
                Driving Innovation in Online Education for a 
                <HighLightText text={"Brignter Future"}/>
            </header>
            <p className=' text-richblack-100  text-[14px] w-[45%] items-center mx-auto text-center'>
                Modern gyan is at the forefront of driving innovation in online education. We're
                passionate about creating a brighter future by offering cutting-edge courses.
                leveraging emerging technologies, and nurturing a vibrant learning community.
            </p>
            <div className='flex gap-x-3 mx-auto w-[80%] mt-5 absolute translate-y-[50%]'>
                <img src={BannerImage1} alt='' className='rounded'/>
                <img src={BannerImage2} alt='' className='rounded'/>
                <img src={BannerImage3} alt='' className='rounded'/>
            </div>
        </div>
        </section>
        {/* Section no 2 */}
        <section>
            <div className='w-[65%] font-semibold text-3xl text-center mx-auto mt-[130px]'>
                <Ouote/>
            </div>
        </section>

        {/* section no 3 */}
        <section>
             <div className=' my-10 flex flex-col gap-10'>
             {/* founding story wala div */}
                <div className='flex mx-auto w-[70%] justify-between'>
                    <div className=' text-richblack-5 w-[45%] flex flex-col gap-6'>
                        <h1 className=' text-3xl font-semibold text-caribbeangreen-400'>Our Founding Story</h1>

                        <p className='text-[13px] text-richblack-300'>Our e-learning plateform was born out of a shared vision and possible for
                        tranforming education. It all began with a group of educators, technologists, and
                        lifelong learners who recongnized the need for accessible, flexible and high-quality learning 
                        opportunities in a rapidy evolving digital world.</p>

                        <p className='text-[13px] text-richblack-300'>
                            As experienced educators ourselves, we witnessed firsthand the limitation and
                            challenges of traditional education systems. We believed that education should not 
                            be confined to the walls of calssroom ot restricted by geographical boundaries.
                            We envisioned a platform that could bridge these gaps and empower individuals from all 
                            walks of life to unlock their full potentitial
                        </p>
                    </div>
                    <div className=' w-[40% ]'>
                        <img src={FoundingStory} alt=''/>
                    </div>

                </div>

                {/* vision and mission wala parent dev */}
                <div  className=' text-richblack-5 flex w-[70%] gap-5 mx-auto justify-between '>
                    {/* left box */}
                    <div className='flex flex-col gap-8 w-[45%]' >
                        <h1 className=' text-3xl text-yellow-300 font-semibold'>Our Vision</h1>
                        <p className=' text-[14px] text-richblack-200'>
                            With this vision in mind , we set out on a journey to create an e-learning
                            plateform that would revolutionize the way people learn, Our team of dedicatied 
                            experts worked tirelessly to develop a robust and intuitive platform taht combines 
                            cutting-edge technology with engaging content, fostering a dynamic a interactive
                            learning experience.
                        </p>
                    </div>
                    {/* right box */}
                    <div className='flex flex-col gap-8 w-[45%]'>
                        <h1 className=' text-3xl text-blue-200 font-semibold'>Our Mission</h1>
                        <p className=' text-[14px] text-richblack-200'>
                            Our mission goes beyond just dellivering courses online. We wanted to create a vibrant community of learners,
                            where individuals can connect, collaborate, and learn from one another, We believe that knowledge thrives in an 
                            enviroment and dialogue, and we foster this spirit of collaboration througn forums,
                            live session, and networking opportunities.
                        </p>
                    </div>
                </div>
             </div>
        </section>

        {/* section 4 */}
        <section className=' bg-gradient-to-r from-richblack-700 via-richblack-300 to-richblack-700 py-11 flex justify-center mb-8'>
            <StatsComponent/>
        </section>

        {/* section 5 */}
        <section className='flex mx-auto justify-center flex-col items-center my-8'>
            <LearningGrid/>
            <ContactFormSection/>
        </section>

        <section>
            <div>
                {/* Review from other Users */}
                {/* Review Slider */}
            </div>
        </section>

        <section className=''>
            <Footer/>
        </section>
    </div>
  )
}

export default About