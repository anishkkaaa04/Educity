import React from "react";
import "./About.css";
import img from "../../assets/about.jpg";
import play from "../../assets/playy.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={img} alt="about-img" />
        <div className="play-btn">▶</div>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>

        <p>
          Embark on a transformative educational journey with our university's
          comprehensive educational programs. Our cutting-edge curriculum is
          designed to foster innovation, critical thinking, and leadership
          skills that will empower you to make a meaningful impact in your
          chosen field.
        </p>

        <p>
          Our dedicated faculty, state-of-the-art facilities, and vibrant campus
          community create an environment where you can thrive academically and
          personally. Whether you're interested in science, technology,
          humanities, or the arts, our diverse range of programs will provide
          you with the knowledge and skills needed to excel in today's dynamic
          world.
        </p>
        <p>
          Whether you aspire to become a teacher or pursue a career in another
          field, our university provides the foundation and opportunities to
          help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default About;
