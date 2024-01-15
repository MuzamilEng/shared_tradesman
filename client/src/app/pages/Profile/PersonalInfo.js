import React from 'react'
import { Icon } from '@iconify/react';

const personalInfo = () => {
    const component = [{title: "Personal Info", no: 1}, {title: "Personal Info", no: 2}, {title: "Account Info", no: 3}]
  return (
    <div>
    <h1 className='text-2vw italic font-bold w-full p-vw border-b-[1px]'>Tradesmen<span className='text-[1.5vw] text-green-600 font-bold'>.</span></h1>
    <div className="flex items-center p-vw border-b-[1px] w-full">
        {component?.map((item, index)=> {
            return <section className="flex ml-vw items-center" key={index}>
                <div className='w-2vw h-2vw text-center flex items-center justify-center p-[0.6vw] rounded-full border-[1px]'> <span className='text-vw text-gray-400'>{item?.no}</span></div>
                <p className='text-vw text-gray-400 ml-0.5vw'>{item?.title}</p>
                <Icon icon="fe:arrow-right" className='text-vw text-gray-400 ml-0.5vw' />
            </section>
        })}
    </div>
    <div className="p-2vw m-2vw border-b-[1px]">
        <h1 className='text-2vw font-bold text-gray-800'>Personal Info</h1>
        <p className='text-vw text-gray-400 w-full font-medium max-w-[31vw]'>Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</p>
    </div>
    </div>
  )
}

export default personalInfo