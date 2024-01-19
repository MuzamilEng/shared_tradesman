import React from 'react'

const Queries = () => {
  return (
    <>
      <main className=' p-[2vw] pr-[2vw] mt-[2vw]'> 
      <div className='bg-green-300 p-[4vw] rounded-md shadow-lg'>
        <h1 className='font-bold'>Get free  advice by asking a Trademan</h1>
        <p className='transform translate-y-[1vw]'>Ask a question anonymously</p>
        <p className='transform translate-y-[1vw]'>Ask a question anonymously</p>
        <div className=' transform translate-x-[20vw] translate-y-[-2vw]'>
            <button className='bg-white p-[0.5vw] w-full max-w-[15vw] rounded-md shadow-lg'>view all question</button>
            <button className='transform translate-x-[2vw] bg-blue-900 p-[0.5vw] text-white w-full max-w-[13vw] rounded-md shadow-lg'>Ask a question</button>
        </div>
        </div> 
      </main>
    </>
  );
}

export default Queries
