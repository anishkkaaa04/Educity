import React from "react";
import "./Testimonials.css";
import next from "../../assets/next.png";
import back from "../../assets/back.png";
import user1 from "../../assets/user1.jpeg";
import user2 from "../../assets/user2.jpeg";
import user3 from "../../assets/user3.jpeg";
import user4 from "../../assets/user4.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next} alt="Next" className="next-btn" />
      <img src={back} alt="Back" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="User 1" />
                <div>
                  <h3>Jessica Doe</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree from Edusity has been a
                life-changing experience. The quality of education,the
                supportive community, and commitment to academic excellence have
                truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="User 2" />
                <div>
                  <h3>Sophia Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree from Edusity has been a
                life-changing experience. The quality of education,the
                supportive community, and commitment to academic excellence have
                truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="User 3" />
                <div>
                  <h3>Selena Gomez</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree from Edusity has been a
                life-changing experience. The quality of education,the
                supportive community, and commitment to academic excellence have
                truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="User 4" />
                <div>
                  <h3>Michaela Brown</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree from Edusity has been a
                life-changing experience. The quality of education,the
                supportive community, and commitment to academic excellence have
                truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
