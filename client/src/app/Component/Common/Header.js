import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
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

  return (
    <>
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="navbar_container bg-[#013914]">
        <div className="logo">
          <Link className="link" to="/tradesmen">
            <span className="text-2vw text-white">TradesMen</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="nav_links">
          <span className="text-vw text-white">Orders</span>
          <span className="text-vw text-white">Profile</span>
          <span className="text-vw text-white">Earnings</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
