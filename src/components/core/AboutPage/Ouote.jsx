import React from 'react'
import HighLightText from '../HomePage/HighLightText'

const Ouote = () => {
  return (
    <div className=' text-richblack-5'>
        We are passionate about revolutionizing the way we learn. Our innovative platform
        <HighLightText text={"combines technology,"}/>
        <span className=' text-brown-400'>
            {" "}
            expertise.
        </span>
        <span>
            and community to create an
        </span>
        <span className=' text-brown-300 '>
        {' '}
             anunpralleled educational experiences.
        </span>
    </div>
  )
}

export default Ouote