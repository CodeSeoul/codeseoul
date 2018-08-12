import React from 'react';
import { format } from 'util';
import MeetupForm from '../presentational/MeetupForm';

//group id 20411696
class MeetupFormContainer extends React.Component {
  state = {
    eventData: {
      name: '',
      description: ''
    }
  };

  onChangeHandler = e => {
    console.log(this.state.eventData.description);
    let newValue = e.target.value;
    let name = e.target.name;
    console.log('name', name);
    this.setState({
      ...this.state,
      eventData: {
        ...this.state.eventData,
        [name]: newValue
      }
    });
  };

  createEvent = e => {
    e.preventDefault();
    let eventName = this.state.eventData.name;
    let eventDescription = this.state.eventData.description;
    console.log('eventName', eventName);
    fetch(
      `https://api.meetup.com/2/event?key=6a5210802364b1a1a2d237a5e4a6763&group_id=20411696&group_urlname=Learn-Teach-Code-Seoul&name=${eventName}&description=${eventDescription}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then(res => {
        console.log(res.status);
        return res.json();
      })
      .then(data => console.log(data));
  };
  render() {
    return (
      <MeetupForm
        onChangeHandler={this.onChangeHandler}
        createEvent={this.createEvent}
        event={this.state.eventData}
      />
    );
  }
}

export default MeetupFormContainer;
