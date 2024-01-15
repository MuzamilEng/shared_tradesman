import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react';
import { otps } from '../Data';

const Otp = ({ showOtp, setOptValue, validateOtp, }) => {
  const initialArray = Array.from({ length: 6 }, () => '');
  const [opt, setOtp] = useState(initialArray);
  const [activeOtp, setActiveOtp] = useState(0);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...opt];
    newOtp[index] = value.substring(value.length - 1);

    if (index < 5 && value.length > 0) {
      setActiveOtp(index + 1);
      inputRefs.current[index + 1].focus();
    }

    setOtp(newOtp);
    setOptValue(newOtp);
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);
  // console.log(opt, "otp");

  return (
    <div className='bg-[#fff] p-2 w-full shadow-2xl h-[20rem] max-w-[40rem] rounded-md'>
      {otps?.map((item) => {
        return <main className='p-2 relative'>
          <Icon icon="basil:cancel-outline" onClick={showOtp} className='absolute cursor-pointer top-2 right-2 text-2xl' />
          <h1 className='text-center text-red-500 font-semibold text-3xl'>{item?.title}</h1>
          <p className='text-center text-xl mt-2'>{item?.para}</p>
          <div className="flex justify-center items-center">
            {opt?.map((_, index) => (
              <div key={index}>
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={opt[index]}
                  onChange={(e) => handleChange(e, index)}
                  type="number"
                  name='opt'
                  className='w-full spin-button-none max-w-[3rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                />
              </div>
            ))}
          </div>
          <p className='text-center text-red-500 text-xl mt-4'>Resend code (1:30s)</p>
          <div className="flex justify-center items-center">
            <button onClick={validateOtp} type='submit' className='bg-[#f85606] text-white mt-2vw p-0.5vw w-full max-w-[10vw] hover:bg-[#fa7447] text-vw rounded-md'>Verify</button>
          </div>
        </main>
      })}
    </div>
  );
}


export default Otp