import React from "react";
import ContactPageStyle from "../styles/pages/ContactPage/ContactPageStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faMeetup,
  faTwitter,
  faKickstarter
} from "@fortawesome/free-brands-svg-icons";

class ContactPage extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    message: null
  };

  functions = {
    changeHandler: event => {
      const target = event.target;
      const value = target.value;
      const id = target.id;

      this.setState({
        [id]: value
      });
      console.log(this.state);
    },
    postInquiry: event => {
      const { firstName, lastName, email, message } = this.state;
      fetch("http://localhost:4002/api/v1.0/inquiry", {
        method: "post",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message
        })
      })
        .then(res => {
          console.log(res);
          res.json();
        })
        .then(data => {
          console.log(data);
        });
    }
  };
  render() {
    console.log("faFacebook", faFacebook);
    return (
      <ContactPageStyle>
        <header>
          <h1>Contact Us</h1>
        </header>
        <div className="container">
          <div className="primary-contact">
            <div id="email">Email : wcoding@wcoding.org</div>
            <div id="phone">Phone : 02-1232-1124</div>
          </div>

          <div className="social-media">
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  transform="left-2"
                  size="2x"
                  color="#3B5998"
                />
                Facebook
              </li>

              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faMeetup}
                  transform="left-2"
                  size="2x"
                  color="red"
                />
                Meetup
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faTwitter}
                  transform="left-2"
                  size="2x"
                  color="#0084b4"
                />
                Twitter
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faKickstarter}
                  transform="left-2"
                  size="2x"
                  color="#f6ea3d"
                />
                Kakao
              </li>
            </ul>
          </div>

          <form>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              required={true}
              id="firstName"
              onChange={this.functions.changeHandler}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              required={true}
              id="lastName"
              onChange={this.functions.changeHandler}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required={true}
              id="email"
              onChange={this.functions.changeHandler}
            />
            <label htmlFor="message">Message</label>
            <input
              type="textarea"
              required={true}
              id="message"
              onChange={this.functions.changeHandler}
            />
            <button id="submit" onClick={() => this.functions.postInquiry()}>
              Send
            </button>
          </form>
        </div>
      </ContactPageStyle>
    );
  }
}

export default ContactPage;
