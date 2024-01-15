import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout2 from '../../Layout/Layout2'
import { useGlobalContext } from '../../UserContext/UserContext';
import Explore from '../../Component/Common/Explore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../Layout/Layout';

const Dashboard = () => {
  const {tradesManProfileId: profileDetails} = useGlobalContext();
  // console.log(profileDetails, "user 1111111");
  const settings = { dots: true,  arrows: false, infinite: true, speed: 3000, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };
  const CustomPrevArrow = (props) => (
    <span {...props} className="text-vw text-black absolute cursor-pointer top-7vw -left-vw z-50">
    <FontAwesomeIcon icon={faArrowLeft} className='text-vw text-black  rounded-md hover:bg-gray-300 bg-gray-400 p-[0.7vw] text-center' />
  </span>);
  const CustomNextArrow = (props) => (
      <span {...props} className="text-vw text-black absolute cursor-pointer  top-7vw -right-vw">
    <FontAwesomeIcon icon={faArrowRight} className='text-vw text-black rounded-md hover:bg-gray-300 bg-gray-400 p-[0.7vw] text-center' />
  </span> );

const settings2 = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };

  return (
    <div>
    <Layout>
        <main className="w-full p-2vw">
            <article className="flex w-full items-start p-vw">
              <div className='w-full max-w-[30vw]'>
                <section className="w-full p-vw border-[1px] border-gray-300 max-w-[25vw]">
                    <div className="col-center p-vw">
                        <img src={profileDetails?.image ? profileDetails?.image : '/img/man.png'} alt={profileDetails?.username} className='w-full max-w-[7vw] h-[7vw] rounded-full object-cover' />
                        <h1 className='text-vw text-center mt-0.5vw font-semibold text-black'>Your display name: <br />@ {profileDetails?.username}</h1>
                        <Link>
                        <div className="w-[22vw] mt-vw text-center border-[1px] hover:bg-gray-600 hover:text-white border-black rounded-md p-0.5vw">
                            <p className='text-vw text-center font-semibold hover:text-white text-black'>Preview your profile</p>
                        </div>
                        </Link>
                    </div>
                    <div className="flex justify-between items-center w-full p-vw">
                        <div className="flex items-center">
                        <Icon icon="ion:location-sharp" className='text-vw text-gray-800'/>
                        <p className='text-vw text-gray-800 ml-0.5vw'>From</p>
                        </div>
                        <p className='text-vw text-gray-800'>Pakistan</p>
                    </div>
                    <div className="flex justify-between items-center w-full p-vw">
                        <div className="flex items-center">
                        <Icon icon="mdi:account" className='text-vw text-gray-800'/>
                        <p className='text-vw text-gray-800 ml-0.5vw'>Member since</p>
                        </div>
                        <p className='text-vw text-gray-800'>March 2022</p>
                    </div>
                    <div className="flex items-center w-full p-vw">
                        <Icon icon="lets-icons:date-today" className='text-vw text-gray-800'/>
                        <p className='text-vw text-gray-800 ml-0.5vw'>Available</p>
                    </div>
                    <Link>
                        <div className="w-[22vw] mt-vw text-center border-[1px] hover:bg-gray-600 hover:text-white border-black rounded-md p-0.5vw">
                            <p className='text-vw text-center font-semibold hover:text-white text-black'>Edit</p>
                        </div>
                        </Link>
                </section>
                <article className="w-full mt-7vw max-w-[25vw] p-vw border-[1px] border-gray-400">
                <h1 className='text-vw text-black font-semibold'>Description</h1>
                <p className='text-vw w-full mt-vw text-gray-800'>
                    {profileDetails?.description}
                </p>
            </article>
                  </div>
                <section className="w-full ml-vw max-w-[42vw]">
                <div className="grid grid-cols-1 gap-vw">
                <Slider {...settings2} className='ml-2vw'>
                    <img src={profileDetails?.gigImage1} alt="dasbord_img" className='w-full max-w-[40vw] h-[15vw] object-fit' />
                    <img src={profileDetails?.gigImage2} alt="dasbord_img" className='w-full max-w-[40vw] h-[15vw] object-fit' />
                    <img src={profileDetails?.gigImage3} alt="dasbord_img" className='w-full max-w-[40vw] h-[15vw] object-fit' />
                    <video src={profileDetails?.video} controls className='w-full max-w-[40vw] h-[15vw] object-fit'></video>
                    </Slider>
                </div>
                    {/* <img src={profileDetails?.image ? profileDetails?.image : 'https://www.beingguru.com/wp-content/uploads/2023/02/create-a-GIG-on-Fiverr-get-Orders-758x426.png'}  className='w-full max-w-[50vw] border-[1px] h-20vw object-fit' alt={profileDetails?.username} /> */}
                    <div className="-mt-10vw">
                    <Explore />
                    </div>
                    <Slider {...settings} className='ml-2vw'>
                    <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/7bfc6d8989c3a7447d328b3f22d324f5-1589702749869/Learn_Killer_content_Jon_LIHP_Banner-desktop-988x233%20.png" alt="dasbord_img" className='w-full max-w-[60vw] h-[15vw] object-fit' />
                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4ec66b17864c3475a86d351e56b2719e-1674666997770/Export%20Desktop%20V4%20%282%29.jpg" alt="dasbord_img" className='w-full max-w-[60vw] h-[15vw] object-fit' />
                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6dba41cad081bfd925a68b939337318c-1638893326019/Export%20Desktop%20V4_2x.png" alt="dasbord_img" className='w-full max-w-[60vw] h-[15vw] object-fit' />
                    <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/f1041954c9a7902bd000c2bbfa4811e7-1599460585293/Complex%20Illustrations.png" alt="dasbord_img" className='w-full max-w-[60vw] h-[15vw] object-fit' />
                    </Slider>
                </section>
            </article>
            </main>
            </Layout>
    </div>
  )
}

export default Dashboard