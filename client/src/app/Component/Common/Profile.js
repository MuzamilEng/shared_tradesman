import { profileCard } from '../../Data';
import Profilecard from './Profilecard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from '../../UserContext/UserContext';
import { Link } from 'react-router-dom';
const Profile = ()=>{
  const {tradesmanProfiles, setSelectedChat, chats, setChats, selectedChat, } = useGlobalContext();
  console.log(tradesmanProfiles)
  const CustomPrevArrow = (props) => (
    <span {...props} className="text-vw text-black absolute cursor-pointer top-[3vw] left-[-4vw] z-50">
    <FontAwesomeIcon icon={faArrowLeft} className='text-2vw text-black  rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
  </span>);
  const CustomNextArrow = (props) => (
      <span {...props} className="text-vw text-black absolute cursor-pointer top-[3vw] right-[-2.5vw]">
    <FontAwesomeIcon icon={faArrowRight} className='text-2vw text-red-800 rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
  </span> );

const settings = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };
 return (
  <>
    <h1 className = "font-bold text-[1.3vw] transform translate-y-[4.5vw] translate-x-[3vw] text-blue-900 ">Here you find best and skill ful Tradesmen</h1>
   <section className="p-[2vw] w-full ">
    <div className='p-[1vw] bg-slate-200  w-full rounded-md shadow-lg'>
        <div className="grid w-full  gap-vw m-vw  grid-cols-1">
      <Slider {...settings} className='m-[1vw]'>
       {tradesmanProfiles?.map((card) => (
        <Link to={`/profileD/${card?._id}`} >
          <Profilecard key={card.id} username={card?.username} image={card?.image} occupation={card?.occupation} />
          </Link>  
          ))}
      </Slider>
      </div> 
         </div>
      
   </section>
    </>
 );   
}
export default Profile

{/* <div className="grid w-full gap-vw m-vw  grid-cols-1">
      <Slider {...settings}>
        {tradesmanProfiles?.map((card) => (
          <ProjectCard key={card.id} username={card?.username} image={card?.image} occupation={card?.occupation} handleSendMessage={() => accessChat(card?._id)} />
        ))}
      </Slider>
      </div> */}