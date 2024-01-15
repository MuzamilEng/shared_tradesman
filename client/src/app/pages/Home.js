import React, { useState } from 'react'
import Login from './Auth/Login'
import Layout from '../Layout/Layout'
import Featured from '../Component/Common/Featured'
import { cards, projects } from '../Data'
import Card from '../Component/Cards/Card'
import ProjectCard from '../Component/Cards/ProjectCard'
import { useGlobalContext } from '../UserContext/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePageContent from '../Component/HomePageContent'
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const {tradesmanProfiles, setSelectedChat, chats, setChats, selectedChat, } = useGlobalContext();
  // console.log(tradesmanProfiles, "user 1111111 trde");
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const loginTokken  = JSON.parse(localStorage.getItem('tokken'));
  const CustomPrevArrow = (props) => (
    <span {...props} className="text-vw text-black absolute cursor-pointer top-[8vw] left-0vw z-50">
    <FontAwesomeIcon icon={faArrowLeft} className='text-2vw text-black  rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
  </span>);
  const CustomNextArrow = (props) => (
      <span {...props} className="text-vw text-black absolute cursor-pointer top-[8vw] right-vw">
    <FontAwesomeIcon icon={faArrowRight} className='text-2vw text-red-800 rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
  </span> );

const settings = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };

const accessChat = async (userId) => {
  console.log(userId, "chat access");

  try {
    setLoadingChat(true);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${loginTokken}`,
      },
    };
    const { data } = await axios.post(`http://localhost:5000/api/v1/chat`, { userId }, config);
    navigate('/chat');
    console.log(data, "req", userId, "response");
    setSelectedChat(data);

    if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
    console.log(selectedChat, "selected chat");

    // Use the navigate function to redirect to the chat page

    setLoadingChat(false);
    // onClose();
  } catch (error) {
    console.log(error);
    // toast({
    //   title: "Error fetching the chat",
    //   description: error.message,
    //   status: "error",
    //   duration: 5000,
    //   isClosable: true,
    //   position: "bottom-left",
    // });
  }
};


  return (
    <div>
      <Layout>
        <Featured />
        <div className="pl-2vw">
        <div className="grid w-full gap-vw m-vw  grid-cols-1">
        <Slider {...settings}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Slider>
      </div>
        </div>
   <HomePageContent />
      <div className="grid w-full gap-vw m-vw  grid-cols-1">
      <Slider {...settings}>
        {tradesmanProfiles?.map((card) => (
          <ProjectCard key={card.id} username={card?.username} image={card?.image} occupation={card?.occupation} handleSendMessage={() => accessChat(card?._id)} />
        ))}
      </Slider>
      </div>
      </Layout>
    </div>
  )
}

export default Home
