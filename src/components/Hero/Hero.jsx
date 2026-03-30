import React from "react";
import "./Hero.css";
import Arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Our cutting egde curriculum is designed to empower students with the
          knowleadge, skills, and exposure they need to succeed.
        </p>
        <button className="btn">
          Explore More
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
