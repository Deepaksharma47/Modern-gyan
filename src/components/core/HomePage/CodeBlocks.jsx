import React from 'react'
import CtaButton from "./Button"
// import HighLightText from './HighLightText'
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
  position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {
return (
  <div className={`flex ${position} mt-11 rounded-md shadow-lg shadow-blue-500 justify-between gap-10 bg-gradient-to-r from-blue-500 to-transparent p-4`}>
    
  {/*Section 1*/}
  <div className='w-[50%] flex flex-col gap-8'>
      {heading}
      <div className='text-richblack-300 font-bold '>
          {subheading}
      </div>

      <div className='flex gap-7 mt-7'>
          <CtaButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
              <div className='flex gap-2 items-center'>
                  {ctabtn1.btnText}
                  <FaArrowRightLong/>
              </div>
          </CtaButton>

          <CtaButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                  {ctabtn2.btnText}
          </CtaButton>
      </div>


  </div>

   {/*Section 2*/}
   <div className=' flex flex-row text-10[px] w-[50%] py-4 lg:w-[500px]'> 
      {/*HW -> BG gradient*/}

      <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
      </div>

      <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
         <TypeAnimation
          sequence={[codeblock, 2000, ""]}
          repeat={Infinity}
          cursor={true}
         
          style = {
              {
                  whiteSpace: "pre-line",
                  display:"block",
              }
          }
          omitDeletionAnimation={true}
         />
      </div>

   </div>


  </div>
)
}

export default CodeBlocks