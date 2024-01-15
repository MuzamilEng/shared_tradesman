import React from "react";
// import "./Featured.scss";

function Featured() {
  return (
    <>
    <div className="featured_container">
      <div className="container p-vw">
        <div className="left">
          <h1>
            Find the perfect <span>tradesMen</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' className="text-vw text-black w-full max-w-[30vw]"/>
            </div>
            <button className="text-vw">Search</button>
          </div>
          <div className="popular">
            <span className="text-2vw">Popular:</span>
            <button className="text-vw">Web Design</button>
            <button className="text-vw">WordPress</button>
            <button className="text-vw">Logo Design</button>
            <button className="text-vw">AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
    <div className="trustedBy">
      <div className="container">
        <h1 className="text-vw w-4vw">Trusted by:</h1>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
      </div>
    </div>
    </>
  );
}

export default Featured;
