import React from 'react'
import ContactUsForm from '../../contactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className=' mx-auto text-white w-[50%] flex flex-col items-center justify-center mt-6 '>
        <h1>
            Get in Touch
        </h1>
        <p>
            We'd love to here for you, Please fill out this form.
        </p>
        <div>
            <ContactUsForm />
        </div>


    </div>
  )
}

export default ContactFormSection