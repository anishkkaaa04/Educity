import React from "react";
import "./Campus.css";

import img2 from "../../assets/gallery2.jpeg";
import img3 from "../../assets/gallery3.jpeg";
import img4 from "../../assets/gallery4.jpeg";
import arrow from "../../assets/arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={img2} alt="Gallery 2" />
        <img src={img3} alt="Gallery 3" />
        <img src={img4} alt="Gallery 4" />
      </div>
      <button className="btn">
        See More here <img src={arrow} alt="Arrow" />
      </button>
    </div>
  );
};

export default Campus;
