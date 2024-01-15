import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useUpdateTradesmanMutation } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';
import Layout from '../../Layout/Layout';
import axios from 'axios';


const ImageInput = ({ id, name, accept, selectedImage, handleImageChange }) => {
  return (
    <div className='relative m-vw w-full bg-gray-400 cursor-pointer hover:bg-gray-600 overflow-hidden max-w-[15vw] h-[15vw] rounded-md border-2'>
      <label htmlFor={id} className='relative bg-gray-300'>
        <img src={selectedImage ? selectedImage : " "} alt={selectedImage ? '' : ''} className='w-full h-full z-10 object-cover' />
        {!selectedImage && (
          <Icon icon='ant-design:camera-filled' className='text-3vw text-white absolute top-[5.6vw] left-[5vw] z-50' />
        )}
      </label>
      <input type='file' id={id} name={name} onChange={handleImageChange} className='sr-only' />
    </div>
  );
};

const VideoInput = ({ id, name, selectedVideo, handleVideoChange }) => {
  return (
    <div className='relative m-vw w-full bg-gray-400 cursor-pointer hover:bg-gray-600 overflow-hidden max-w-[15vw] h-[15vw] rounded-md border-2'>
      <label htmlFor={id} className='relative bg-gray-300'>
        {selectedVideo ? (
          <video controls className='w-full h-full z-10 object-cover'>
            <source src={selectedVideo} type='video/mp4' />
          </video>
        ) : (
          <Icon icon='solar:reel-linear' className='text-3vw text-white absolute top-[5.6vw] left-[5.4vw] z-50' />
        )}
      </label>
      <input type='file' accept='video/*' id={id} name={name} onChange={handleVideoChange} className='sr-only' />
    </div>
  );
};

const Overview = () => {
  const {id} = useParams();
  const [userInfo, setUserInfo] = useState({
    gigImage1: "", gigImage2: "", gigImage3: "", video: "",gigTitle: "", gigDescription: "",
  });
  const [selectedFileURL, setSelectedFileURL] = useState({
    gigImage1: "", gigImage2: "", gigImage3: "", video: "",
  });
  // const {tradesManProfileId} = useGlobalContext()
  // const id = tradesManProfileId?._id
  console.log(id, "tr ki id");

  const navigate = useNavigate();
  const [updateTradesman] = useUpdateTradesmanMutation();
  const { handleSubmit, setValue, control, formState: { errors }, reset, register } = useForm({
    defaultValues: {
      gigTitle: "",
      gigDescription: "",
      gigImage1: "",
      gigImage2: "",
      gigImage3: "",
      video: "",
    },
  });

  const handleInputChange = (e)=>{
    const { name, value } = e.target;
    setValue(name, value);
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo({ ...userInfo, [e.target.name]: file });
      const imageURL = URL.createObjectURL(file);
      setSelectedFileURL({ ...selectedFileURL, [e.target.name]: imageURL });
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo({ ...userInfo, video: file });
      const videoURL = URL.createObjectURL(file);
      setSelectedFileURL({ ...selectedFileURL, video: videoURL });
    }
  };
  console.log(userInfo, "userInfo");


  const showToast = (message, type) => {
    toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
};


// ...

const onSubmit = async (data, e) => {
  e.preventDefault();
  console.log(data, "data");
  
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
    if (userInfo?.gigImage1) {
      formData.append('gigImage1', userInfo?.gigImage1);
    }
    if (userInfo?.gigImage2) {
      formData.append('gigImage2', userInfo?.gigImage2);
    }
    if (userInfo?.gigImage3) {
      formData.append('gigImage3', userInfo?.gigImage3);
    }
    if (userInfo?.video) {
      formData.append('video', userInfo?.video);
    }

    // Make the Axios POST request
    const response = await axios.put(`http://localhost:5000/api/v1/tradesman/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response, "response");

    // Handle the response as needed
    if (response.data) {
      showToast('Successfully updated', 'success');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      showToast('Failed to sign up. Please try again.', 'error');
    }
  } catch (error) {
    console.error('Error during sign-up:', error);
    showToast('An unexpected error occurred. Please try again.', 'error');
  }

  reset();
};


  return (
    <Layout>
      <main className="flex justify-center m-auto mt-2vw h-full items-cemter flex-col w-full max-w-[50vw] p-2vw bg-white border-[1px]">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-start justify-between w-full">
            <div className="">
              <h1 className="text-[1.2vw] font-bold">Gig Title</h1>
              <p className='text-vw w-full max-w-[17vw]'>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
            </div>
            <textarea className='w-full p-vw border-[2px] rounded-md max-w-[25vw] focus:outline-none' onChange={handleInputChange} name='gigTitle' {...register('gigTitle')}></textarea>
          </div>
          <div className="mt-2vw border-b-[1px] w-full">
            <h1 className="text-[1.5vw] w-full text-center border-b-[1px] p-vw font-bold">Description</h1>
            <p className='text-vw w-full mt-vw font-medium max-w-[17vw]'>Briefly Describe Your Gig</p>
            <textarea rows={6} className='w-full p-vw mt-vw border-[2px] rounded-md focus:outline-none' onChange={handleInputChange} name='gigDescription' {...register('gigDescription')}></textarea>
          </div>
          <div className="mt-vw w-full">
            <h1 className='text-[1.5vw] font-bold text-center'>Showcase Your Services In A Gig Gallery</h1>
            <p className='text-vw w-full mt-vw font-medium'>Encourage buyers to choose your Gig by featuring a variety of your work.</p>
            <section className="w-full p-vw">
              <h1 className='text-vw text-black mt-0.5vw font-semibold'>Images (up to 3)</h1>
              <p className='text-vw w-full mt-vw font-medium'>Get noticed by the right buyers with visual examples of your services</p>
              <div className="flex mt-vw items-center">
                <ImageInput id='gigImage1' name='gigImage1' selectedImage={selectedFileURL?.gigImage1} handleImageChange={handleImageChange} />
                <ImageInput id='gigImage2' name='gigImage2' selectedImage={selectedFileURL?.gigImage2} handleImageChange={handleImageChange} />
                <ImageInput id='gigImage3' name='gigImage3' selectedImage={selectedFileURL?.gigImage3} handleImageChange={handleImageChange} />
              </div>
            </section>
            <section className="w-full p-vw">
              <h1 className='text-vw text-black underline font-bold'>Gig Video Guideline</h1>
              <h1 className='text-vw text-black mt-0.5vw font-semibold'>Video (up to 1)</h1>
              <p className='text-vw text-gray-500 font-semibold'>Capture buyers' attention with a video that showcases your service. Please choose a video shorter than 75 seconds and smaller than 50MB</p>
              <div className="flex mt-vw items-center">
                <VideoInput
                  id='video'
                  name='video'
                  selectedVideo={selectedFileURL?.video}
                  handleVideoChange={handleVideoChange}
                />
              </div>
            </section>
          </div>
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </div>
    </main>
    </Layout>
  );
};

export default Overview;
