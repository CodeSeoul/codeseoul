import React from "react";
import ContactPageStyle from "../styles/pages/ContactPage/ContactPageStyle";

const ContactPage = () => {
  return (
    <ContactPageStyle>
        <header>
          <h1>Contact Us</h1>
        </header>

        <div className="primary-contact">
          <div id="email">Email : wcoding@wcoding.org</div>
          <div id="phone">Phone : 02-1232-1124</div>
        </div>

        <div className="social-media">
          <ul>
            <li>Facebook</li>
            <li>Meetup</li>
            <li>Tweeter</li>
            <li>Kakao</li>
          </ul>
        </div>

        <div className="form">
          <form action="">
            <input type="text" />
            <input type="email" />
            <input type="textarea" />
            <button id="submit">Send</button>
          </form>
        </div>
    </ContactPageStyle>
  );
};

export default ContactPage;
