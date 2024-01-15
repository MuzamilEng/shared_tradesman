import React from 'react'
import { start_selling } from '../../Data'
import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <div>
        <h1 className='text-2vw italic font-bold w-full p-vw border-b-[1px]'>Tradesmen<span className='text-[1.5vw] text-green-600 font-bold'>.</span></h1>
        <article className="w-full p-3vw row-center">
            <section className="w-full max-w-[40vw] p-vw">
                <h1 className='text-[1.3vw] font-bold text-black'>Ready to start selling on Tradesmen? <br /> Here’s the breakdown:</h1>
                <div className="mt-vw">
                {start_selling?.map((item, index)=> {
                    return <main className="w-full flex items-center p-[1.5vw] border-b-[1px]" key={index}>
                        <span className='text-3vw'>{item?.icon}</span>
                       <div className="ml-vw">
                       <h1 className='text-vw font-medium text-black'>{item.title}</h1>
                        <p className='text-vw text-gray-400'>{item.info}</p>
                       </div>
                    </main>
                })}
                </div>
                <Link to='/personal_info'>
                <button className='text-vw mt-2vw w-full max-w-[8vw] ml-vw bg-green-500 rounded-md text-white font-semibold hover:bg-green-600 p-[0.7vw]'>Continue</button>
                </Link>
            </section>
            <section className="w-full ml-2vw max-w-[40vw]">
            <div className="item">
            <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls />
          </div>
            </section>
        </article>
    </div>
  )
}

export default Onboarding