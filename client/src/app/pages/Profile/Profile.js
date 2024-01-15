import React, { useEffect, useState } from 'react'
import { tradesmanProfile } from '../../Data'
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAddTradesmanMutation } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';
import Map from '../../Component/GoogleMap/Map';
import PersonalInfo from './PersonalInfo';
import { Icon } from '@iconify/react';

const Profile = () => {
  const [searchedLocation, setSearchedLocation] = useState(null)
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })
   // Retrieving user login info from localStorage
   const userLoginInfoString = localStorage.getItem('userLoginInfo');
   const userLoginInfo = JSON.parse(userLoginInfoString);
   console.log(userLoginInfo, 'userLoginInfo');
    const [addTradesman] = useAddTradesmanMutation();
    const navigate = useNavigate();
    // const [userDetails, setUserDetails] = useState(null)
    const { tradesManProfile, setTradesManProfile } = useGlobalContext();
    const [selectedImageURL, setSelectedImageURL] = useState(tradesManProfile?.image || "");
    const { handleSubmit, setValue, control, formState: { errors } } = useForm({
      defaultValues: {
        occupation: tradesManProfile?.occupation || "",
        username: userLoginInfo?.username || "",
        email: userLoginInfo?.email || "",
        phoneNumber: userLoginInfo?.phoneNumber || "",
        ratings: tradesManProfile?.ratings || "",
        hourlyRate: tradesManProfile?.hourlyRate || "",
        description: tradesManProfile?.description || "",
        location: tradesManProfile?.location || "",
        image: userLoginInfo?.image || "",
          lat: coordinates?.lat || 0,
          lng: coordinates?.lng || 0,
      },
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValue(name, value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setTradesManProfile({ ...tradesManProfile, [e.target.name]: file }); // Set image as an object with public_id and url: file });
        const imageURL = URL.createObjectURL(file);
        setSelectedImageURL(imageURL);
      }
    };
    const onSubmit = async (data) => {
      const formData = new FormData();
    
      // Append text data to formData
      for (const key in data) {
        if (data[key] !== undefined) {
          formData.append(key, data[key]);
        }
      }
    
      // console.log(coordinates?.lat, 'coordinates ------------1');
      // console.log(coordinates?.lng, 'coordinates-------------1');
      // Convert coordinates to numbers and append to formData
    formData.append('lat', coordinates?.lat);
    formData.append('lng', coordinates?.lng);
   
      // Append image to formData
      if (userLoginInfo?.image || tradesManProfile?.image) {
        formData.append('image', tradesManProfile.image);
      }
    
      try {
        const result = await addTradesman(formData);
    
        toast.success("Post Added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
    
        setTimeout(() => {
          // navigate('/');
        }, 3000);
    
        // console.log(result, "from onSubmit")
        // console.log(result.data._id, "from onSubmit")
        const profileId = result?.data._id;
        // console.log(profileId, "profileId");
        localStorage.setItem('profileId', profileId);
        navigate(`/profile/${profileId}`);
      } catch (error) {
        toast.error("An error occurred while adding post", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
        console.error(error);
      }
    };
    

    useEffect(() => {
      console.log(searchedLocation, 'searchedLocation');
      const lat = Number(searchedLocation?.center?.[0]) || 0;
      const lng = Number(searchedLocation?.center?.[1]) || 0;
    
      setCoordinates({ ...coordinates, lat, lng });
    }, [searchedLocation]);
    
  // console.log(coordinates?.lat, 'coordinates');
  // console.log(coordinates?.lng, 'coordinates');

  return (
    <div>
        <ToastContainer />
        <PersonalInfo />
        <form onSubmit={handleSubmit(onSubmit)} className="p-3vw w-full h-full">
            {tradesmanProfile?.map((item, index) => (
                <div key={index} className="w-full h-[90vw]">
                <section className='col-center w-full'>
                  <div className='relative w-full bg-gray-400 cursor-pointer hover:bg-gray-600 overflow-hidden max-w-[10vw] h-[10vw] rounded-full border-2'>
                  <label htmlFor='image' className='relative bg-gray-300'>
                      <img src={userLoginInfo?.image ? userLoginInfo?.image : selectedImageURL} alt=' ' className='w-full h-full z-10 object-cover' />
                      {!selectedImageURL && <Icon icon="ant-design:camera-filled" className='text-3vw text-white absolute top-[3.3vw] left-[3.3vw] z-50 ' />}
                  </label>
                  <input
                    type='file'
                    id='image'
                    name='image'
                    onChange={handleImageChange}
                    className='sr-only' // Use sr-only class to hide the input visually
                  />
                 </div>  
                 <label htmlFor="image" className='text-black text-[1.3vw] font-semibold'>Profile Image</label>
                  </section> 
                    <div className="col-center w-full">
                    <section className="mt-vw ml-8vw p-2vw w-full grid grid-cols-2 gap-2">
                        {item?.form?.map((item2, index)=>(
                            <div key={index} className='w-full max-w-[33vw]'>
                                {item2?.type === 'textarea' ? 
                                <>
                                    <label className='text-black text-vw font-semibold'>{item2?.label}</label> <br />
                                    <Controller
                                        name={item2?.name}
                                        control={control}
                                        rules={item2?.rules}
                                        render={({ field }) => (
                                            <textarea rows={3}
                                                onChange={handleInputChange}
                                                {...field} value={field?.value}
                                                type={item2?.type} placeholder={item2?.placeholder}
                                                className="w-full focus:outline-none max-w-[30vw] p-vw rounded-md border-[1px] border-gray-300"
                                            ></textarea>
                                        )}
                                    />
                                    <br />
                                    {errors[item2?.name] && <p className='text-red-500'>{errors[item2?.name]?.message}</p>}
                                 {/* <textarea value={item2?.title} rows={3} placeholder={item2?.placeholder} name={item2?.name} className='w-full focus:outline-none max-w-[30vw] p-vw rounded-md border-[1px] border-gray-300' /> */}
                                </> :
                            <div className='mt-vw'>
                                <label className='text-black text-vw font-semibold'>{item2?.label}</label> <br />
                                <Controller
                                        name={item2?.name}
                                        control={control}
                                        rules={item2?.rules}
                                        render={({ field }) => (
                                            <input
                                                onChange={handleInputChange}
                                                {...field} value={field?.value}
                                                type={item2?.type} placeholder={item2?.placeholder}
                                                className="w-full max-w-[30vw] focus:outline-none p-vw rounded-md border-[1px] border-gray-300"
                                            />
                                        )}
                                    />
                                    <br />
                                    {errors[item2?.name] && <p className='text-red-500'>{errors[item2?.name]?.message}</p>}
                                {/* <input value={item2?.title} placeholder={item2?.placeholder} name={item2?.name} className='w-full max-w-[30vw] focus:outline-none p-vw rounded-md border-[1px] border-gray-300' /> */}
                                </div>}
                            </div>
                        ))}
                    </section>
                    <div className="m-vw w-full">
                      <Map setSearchedLocation={setSearchedLocation} />
                    </div>
                    <div className="flex mt-25vw w-full justify-center items-center">
                                <button type='submit' className='bg-[#1dbf73] text-white mt-2vw p-0.5vw w-full max-w-[10vw] hover:bg-[#1dbf73e0] text-vw rounded-md'>Submit</button>
                            </div>
                    </div>
                </div>
            ))}
        </form>
    </div>
  )
}

export default Profile
