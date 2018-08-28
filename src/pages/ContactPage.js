import React from "react";
import ContactPageStyle from "../styles/pages/ContactPage/ContactPageStyle";

class ContactPage extends React.Component {

  state={
    'first-name' : null,
    'last-name' : null,
    'email' : null,
    'message' : null
  }
  changeHandler = event => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    
    this.setState({
      [id] : value
    })
    console.log(this.state);
  };
  render() {
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
              <li>Facebook</li>
              <li>Meetup</li>
              <li>Tweeter</li>
              <li>Kakao</li>
            </ul>
          </div>

          <form action="">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" onChange={this.changeHandler} />
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" onChange={this.changeHandler} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.changeHandler} />
            <label htmlFor="message">Message</label>
            <input type="textarea" id="message" onChange={this.changeHandler} />
            <button id="submit">Send</button>
          </form>
        </div>
      </ContactPageStyle>
    );
  }
}

export default ContactPage;
