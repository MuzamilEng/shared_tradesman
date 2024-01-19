import React from 'react'
import { heroData, labData } from '../../Data'

const Hero = () => {
  return (
    <>
        <h1 className='font-bold text-[1.5vw] transform translate-x-[4vw] translate-y-[2vw]'>How can we help you today?</h1>
      <section className="flex gap-[2vw] transform translate-x-[3.5vw] translate-y-[1vw]  pt-[2vw] pr-[7vw] ">
        <div className="bg-b1 rounded-md shadow-lg p-[2vw] h-[23vw] w-full max-w-[17vw]">
          <h1 className="transform translate-y-[-1vw] font-bold">
            Video cunsoltation
          </h1>
          <p className="transform translate-y-[-1vw]">Best skill full Trademen</p>
          
            <img src="/img/m1.png" alt="" className='mt-[2vw]' />
          
        </div>
        <div className={`flex  flex-col gap-[2vw] w-full max-w-[30vw] p-[1vw] mt-[-0.5vw]`}>
          {heroData?.map((elem, i) => (
            <div className={`flex  bg-${elem.bgColor} items-center justify-between shadow-lg rounded-lg`}>
            <div
              className={`  h-[8vw] w-full max-w-[70vw] p-x-[2vw] `}
              key={i}
              >
              <h1 className="font-bold px-[1vw] text-[1vw]  transform translate-y-[0.5vw]">
                {elem.title}
              </h1>
              <p className="px-[1vw] text-[1vw]  transform translate-y-[1vw]">
                {elem.info}
              </p>
            </div>
            <div className='w-full max-w-[70vw]'>
               <img src={elem.img} alt="" className=' transform translate-x-[4vw]'/>
            </div>
              </div>
          ))}

          <div className="flex gap-[3vw] absolute top-[20vw]  transform translate-x-[28.5vw] p-[2vw]  translate-y-[-5vw] ">
            {labData?.map((elem, i) => (
              <div
                className="bg-red-200 p-[2vw] h-[8vw] w-full max-w-[20vw] rounded-md shadow-lg"
                key={i}
              >
                <h1 className="font-bold transform translate-y-[4vw]  ">
                  {elem.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-200 h-[8vw] transform translate-y-[1vw] p-[2vw] w-full max-w-[45vw] shadow-lg rounded-md">
          <h1 className="font-bold transform translate-y-[-1vw]">
            Instant Trademan
          </h1>
          <p className="translate-y-[-1vw] text-[1vw]">Get Instant to book trademan</p>
        </div>
      </section>
    </>
  );
}

export default Hero
