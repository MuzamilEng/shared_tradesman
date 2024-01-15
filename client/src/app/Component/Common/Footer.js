import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2 className="text-vw">Categories</h2>
            <span className="text-vw hover:underline">Graphics & Design</span>
            <span className="text-vw hover:underline">Digital Marketing</span>
            <span className="text-vw hover:underline">Writing & Translation</span>
            <span className="text-vw hover:underline">Video & Animation</span>
            <span className="text-vw hover:underline">Music & Audio</span>
            <span className="text-vw hover:underline">Programming & Tech</span>
            <span className="text-vw hover:underline">Data</span>
            <span className="text-vw hover:underline">Business</span>
            <span className="text-vw hover:underline">Lifestyle</span>
            <span className="text-vw hover:underline">Photography</span>
            <span className="text-vw hover:underline">Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span className="text-vw hover:underline">Press & News</span>
            <span className="text-vw hover:underline">Partnerships</span>
            <span className="text-vw hover:underline">Privacy Policy</span>
            <span className="text-vw hover:underline">Terms of Service</span>
            <span className="text-vw hover:underline">Intellectual Property Claims</span>
            <span className="text-vw hover:underline">Investor Relations</span>
            <span className="text-vw hover:underline">Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span className="text-vw hover:underline">Help & Support</span>
            <span className="text-vw hover:underline">Trust & Safety</span>
            <span className="text-vw hover:underline">Selling on TradesMen</span>
            <span className="text-vw hover:underline">Buying on TradesMen</span>
          </div>
          <div className="item">
            <h2 className="text-vw">Community</h2>
            <span className="text-vw hover:underline">Customer Success Stories</span>
            <span className="text-vw hover:underline">Community hub</span>
            <span className="text-vw hover:underline">Forum</span>
            <span className="text-vw hover:underline">Events</span>
            <span className="text-vw hover:underline">Blog</span>
            <span className="text-vw hover:underline">Influencers</span>
            <span className="text-vw hover:underline">Affiliates</span>
            <span className="text-vw hover:underline">Podcast</span>
            <span className="text-vw hover:underline">Invite a Friend</span>
            <span className="text-vw hover:underline">Become a Seller</span>
            <span className="text-vw hover:underline">Community Standards</span>
          </div>
          <div className="item">
            <h2 className="text-vw">More From Fiverr</h2>
            <span className="text-vw hover:underline">TradesMen Business</span>
            <span className="text-vw hover:underline">TradesMen Pro</span>
            <span className="text-vw hover:underline">TradesMen Logo Maker</span>
            <span className="text-vw hover:underline">TradesMen Guides</span>
            <span className="text-vw hover:underline">Get Inspired</span>
            <span className="text-vw hover:underline">TradesMen Select</span>
            <span className="text-vw hover:underline">ClearVoice</span>
            <span className="text-vw hover:underline">TradesMen Workspace</span>
            <span className="text-vw hover:underline">Learn</span>
            <span className="text-vw hover:underline">Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>TradesMen</h2>
            <span>© TradesMen International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" className="w-full max-w-[5vw]"/>
              <img src="/img/facebook.png" alt="" className="w-full max-w-[5vw]" />
              <img src="/img/linkedin.png" alt="" className="w-full max-w-[5vw]"/>
              <img src="/img/pinterest.png" alt="" className="w-full max-w-[5vw]"/>
              <img src="/img/instagram.png" alt="" className="w-full max-w-[5vw]"/>
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" className="w-full max-w-[5vw]" />
              <span className="text-vw">English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span className="text-vw">USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
