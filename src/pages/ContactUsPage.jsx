import React from 'react'
import ContactUsForm from '../components/contactPage/ContactUsForm'
import Footer from '../components/common/Footer'

const ContactUsPage = () => {
  return (
    <div className='flex flex-col mt-12'>
        <div className='w-[32%] text-richblack-100 mx-auto flex flex-col gap-6 border rounded p-6'>
            <header className=' text-3xl text-richblack-5 font-semibold'>
                Got a Idea? We've got the skills.
                Let's team up
            </header>
            <p className=' text-[13px]'>Tell us more about yourself and what you're got in mind.</p>
            <ContactUsForm/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default ContactUsPage