import React from "react";
import "./Contact.css";
import contact from "../../assets/comments.png";
import mailicon from "../../assets/gmail.png";
import phoneicon from "../../assets/phone-call.png";
import locationicon from "../../assets/map.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={contact} alt="Contact" />
        </h3>
        <p>
          Feel free to reach out to us through this form or find our contact
          information below. Your feedback,questions and suggestions are
          important to us.
        </p>
        <ul>
          <li>
            <img src={mailicon} alt="Mail" />
            anishkasood04@gmail.com
          </li>
          <li>
            <img src={phoneicon} alt="Phone" />
            9788173532
          </li>
          <li>
            <img src={locationicon} alt="Location" />
            Massachusetts Ave, Boston <br /> MA 02115, US
          </li>
        </ul>
      </div>

      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
