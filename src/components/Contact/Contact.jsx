import React, { useState } from "react";
import "./Contact.css";
import contact from "../../assets/comments.png";
import mailicon from "../../assets/gmail.png";
import phoneicon from "../../assets/phone-call.png";
import locationicon from "../../assets/map.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending..."); // 👈 show loading

    const formData = new FormData(event.target);
    formData.append("access_key", "90461141-5c09-4c15-998a-47a330f084f7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! ✅");
        event.target.reset(); // clear form
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Error sending message ❌");
    }
  };

  return (
    <div className="contact">
      {/* LEFT SIDE */}
      <div className="contact-col">
        <h3>
          Send us a message <img src={contact} alt="Contact" />
        </h3>
        <p>
          Feel free to reach out to us through this form or find our contact
          information below. Your feedback, questions and suggestions are
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

      {/* RIGHT SIDE */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here"
            required
          ></textarea>

          <button type="submit" disabled={result === "Sending..."}>
            Submit Message
          </button>
        </form>

        {/* STATUS MESSAGE */}
        <span className="result">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
