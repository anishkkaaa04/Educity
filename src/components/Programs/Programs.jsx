import React from "react";
import "./Programs.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import graduation from "../../assets/graduation-cap.png";
import business from "../../assets/business.png";
import diploma from "../../assets/diploma.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={graduation} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={business} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={diploma} alt="" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
