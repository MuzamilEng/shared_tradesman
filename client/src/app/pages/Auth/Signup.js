import React, { useState } from 'react'
import { signup } from '../../Data'
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAddTradesmanMutation, useSignUpUserMutation } from '../../store/storeApi';
import { Icon } from '@iconify/react';
import Header from '../../Component/Common/Header';
import Otp from '../../Component/Otp';
import { useGlobalContext } from '../../UserContext/UserContext';

const Signup = () => {
    const [signUpUser] = useSignUpUserMutation();
    const [addTradesman] = useAddTradesmanMutation();
    const {userInfo, setUserInfo} = useGlobalContext();
    const [showOpt, setShowOpt] = React.useState(false);
    const [selectedImageURL, setSelectedImageURL] = useState("");

    const navigate = useNavigate()
    const [otpValue, setOptValue] = React.useState([]);
    const { handleSubmit, setValue, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            firstName: "",
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            category: '',
            image: "",
        },
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
        setValue(name, value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserInfo({ ...userInfo, [e.target.name]: file }); // Set image as an object with public_id and url: file });
          const imageURL = URL.createObjectURL(file);
          setSelectedImageURL(imageURL);
        }
      };
    const showToast = (message, type) => {
        toast[type](message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        });
    };

    const onSubmit = async (data, e) => {
        e.preventDefault();
        
        // Create a FormData object to hold the form data, including the image
        const formData = new FormData();
      
        try {
          // Append text data to formData
          for (const key in data) {
            if (data[key] !== undefined) {
              formData.append(key, data[key]);
            }
          }
          // Append image to formData
          if (userInfo?.image) {
            formData.append('image', userInfo.image);
          }
      console.log(data, "data");
      console.log(formData, "formData");
          // Call the signUpUser function with the formData
          const response = await signUpUser(formData);
      
          if (!response.error) {
            showToast('Successfully Signed Up', 'success');
            setTimeout(() => {
              navigate('/login');
            }, 2000);
            // if (response.data.category === 'tradesman') {
            //   navigate('/profile');
            // } else {
            //   setTimeout(() => {
            //     navigate('/login');
            //   }, 2000);
            // }
          } else {
            showToast('Failed to sign up. Please try again.', 'error');
          }
        } catch (error) {
          console.error('Error during sign-up:', error);
          showToast('An unexpected error occurred. Please try again.', 'error');
        }
        
        // Reset the form
        reset();
      };
      
    
    return (
        <div>
            <main className='w-screen relative h-full'>
                <ToastContainer />
               <Header />
                <form onSubmit={handleSubmit(onSubmit)} className="flex mt-vw justify-center items-center">
                    {signup?.map((item, index) => (
                        <div key={index} className='mt-2vw'>
                            <h1 className='text-[1.6vw] italic font-medium text-start'>{item?.title}</h1>
                            <div className="col-center">
                            <img src={selectedImageURL} className='w-full bg-slate-300 mt-vw max-w-[7vw] h-[7vw] rounded-full border-[1px] border-gray-300 ' /> <br />
                          <input type="file" name='image' onChange={handleImageChange} className='p-0.5vw mt-vw border-[1px] border-gray-300 rounded-md w-full max-w-[10vw]' />
                            </div>
                            <section className="grid mt-2vw grid-cols-2 gap-2">
                            {item?.form?.map((form, index) => (
                                <div key={index} className='w-full  p-0.5vw max-w-[30vw]'>
                                    <label className='text-vw font-light text-black'>{form?.label}</label> <br />
                                    <Controller
                                        name={form?.name}
                                        control={control}
                                        rules={form?.rules}
                                        render={({ field }) => (
                                            <input
                                                onChange={handleInputChange}
                                                {...field} value={field?.value}
                                                type={form?.type} placeholder={form?.placeholder}
                                                className="w-[20vw] text-vw focus:outline-none p-[0.6vw] focus:shadow-md border-gray-300 border-[1px] rounded-md"
                                            />
                                        )}
                                    />
                                    <br />
                                    {errors[form?.name] && <p className='text-red-500'>{errors[form?.name]?.message}</p>}
                                </div>
                            ))}
                                    <h1 className='text-vw text-black font-medium ml-vw mt-vw'>Select your category</h1> <br />
                                <section className="grid grid-cols-2 gap-2">
                                    {item?.category?.map((form, index) => (
                                        <div key={index} className='w-full p-0.5vw max-w-[30vw]'>
                                            {form?.options.map((option, optionIndex) => (
                                                <div key={optionIndex} className="ml-vw flex items-center">
                                                    <input
                                                        type={form?.type}
                                                        id={`${form?.name}-${option.value}`}
                                                        name={form?.name}
                                                        value={option.value}
                                                        onChange={handleInputChange}
                                                        checked={option.value === userInfo.category}
                                                        className="ml-vw"
                                                    />
                                                    <label className='text-vw ml-0.5vw text-black font-medium' htmlFor={`${form?.name}-${option.value}`}>{option.label}</label>
                                                </div>
                                            ))}
                                            <br />
                                            {errors[form?.name] && <p className='text-red-500'>{errors[form?.name]?.message}</p>}
                                        </div>
                                    ))}
                                </section>
                            </section>
                            <div className="flex w-full -mt-[2.5vw] justify-center items-center">
                                <button type='submit' className='bg-[#1dbf73] text-white mt-2vw p-0.5vw w-full max-w-[10vw] hover:bg-[#1dbf73e0] text-vw rounded-md'>Sign Up</button>
                            </div>
                            <p className='text-[0.9vw] mt-0.5vw w-full text-center'>or continue with</p>
                            <div className="mt-2vw w-full justify-center flex items-center">
                                <section className="flex items-center border-[1px] border-gray-500 cursor-pointer hover:bg-gray-100 ml-vw w-full max-w-[8vw] text-center justify-center rounded-md p-0.5vw">
                                    <Icon icon="mdi:facebook" className='text-[#3b5998] text-[1.5vw] mr-0.2vw' />
                                </section>
                                <section className="flex items-center border-[1px] border-gray-500 cursor-pointer hover:bg-gray-100 ml-vw w-full max-w-[8vw] text-center justify-center rounded-md p-0.5vw">
                                    <Icon icon="devicon:google" className='text-[1.5vw] mr-0.2vw' />
                                </section>
                                <section className="flex items-center border-[1px] border-gray-500 cursor-pointer hover:bg-gray-100 ml-vw w-full max-w-[8vw] text-center justify-center rounded-md p-0.5vw">
                                    <Icon icon="pajamas:twitter" className='text-[1.5vw] mr-0.2vw' />
                                </section>
                            </div>
                        </div>
                    ))}
                </form>
                {/* {showOpt && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="relative">
            <Otp showOtp={() => setShowOpt(!showOpt)} setOptValue={setOptValue} />
          </div>
        </div>
      )} */}
            </main>
        </div>
    )
}

            {/* <Otp setOptValue={setOptValue} validateOtp={validateOTP} showOtp={() => setShowOpt(!showOpt)} /> */}
export default Signup