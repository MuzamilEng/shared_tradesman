import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ image, username, occupation, handleSendMessage }) {
  return (
    <div className="projectCard m-vw">
      <img src={image ? image : '/img/man.png'}  alt="" />
      <div className="info">
        <img src={image ? image : '/img/man.png'} alt="" />
        <div className="texts">
          <h2>{occupation}</h2>
          <span className="text-vw">{username}</span>
        </div>
        {/* <button className="text-vw p-0.5vw bg-blue-500 rounded-md " onClick={handleSendMessage}>Send Message</button> */}
      </div>
    </div>
  );
}

export default ProjectCard;
