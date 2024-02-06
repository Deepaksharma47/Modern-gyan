import React from 'react'

const stats = [
    {count:"5K", label: "Active Students"},
    {count:"10+", label: "Mentors"},
    {count:"200+", label: "Courses"},
    {count:"50+", label: "Awards"}

]

const StatsComponent = () => {
  return (
    <section className='w-[70%]'>
        <div className=' text-richblack-5 flex justify-around text-center'>
            {stats.map((data, index) =>{
                return (
                    <div key={index}>
                        <h1 className=' text-3xl font-semibold'>{data.count}</h1>
                        <h2 className=' text-[14px] text-richblack-50'>
                            {data.label}
                        </h2>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default StatsComponent