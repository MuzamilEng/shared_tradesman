import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../UserContext/UserContext";
// import "./Navbar.scss";

function Navbar() {
  const {user} = useGlobalContext()
  console.log(user, "user data a");
  const {tradesManProfileId} = useGlobalContext();
  const id = tradesManProfileId?._id
  console.log(id, "tradesManProfile");
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();


  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true, 
  };

  return (
    <>
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="navbar_container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">TradesMen</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="nav_links">
          <span>TradesMen Business</span>
          <span>Explore</span>
          {!user  && <Link to={'/login'} className="link"><button className="nav_btn">Join</button></Link>}
          {user  && <Link to={'/dashboard'} className="link"><button className="nav_btn">Dashboard</button></Link>}
          {user  && <Link to='/chat'><span>Messages</span></Link>}
          {!user  && <Link to={`/profile/${id}`} className="link"><span className="">Profile</span></Link>}
          {user && id == undefined  && <Link to={`/profile`} className="link"><span className="">Create Profile</span></Link>}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {user && <img
                src={user?.image}
                alt={user?.name}
                className="w-3vw h-3vw rounded-full object-fit cursor-pointer"
              />}
          {/* {user ? (
            <div className="" onClick={()=>setOpen(!open)}>
              <img
                src={user?.image}
                alt={user?.name}
                className="w-3vw h-3vw rounded-full object-fit cursor-pointer"
              />
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="nav_link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="nav_link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="nav_link" to="/orders">
                  Orders
                </Link>
                <Link className="nav_link" to="/messages">
                  Messages
                </Link>
                <Link className="nav_link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button className="nav_btn">Join</button>
              </Link>
            </>
          )} */}
        </div>
      </div>
    {/* {(active || pathname !== "/") && ( */}
    <>
          <hr />
          <div className="nav_menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      {/* )} */}
    </div>
    </>
  );
}

export default Navbar;
