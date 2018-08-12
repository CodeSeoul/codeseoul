import React from 'react';
import { format } from 'util';
import MeetupForm from '../presentational/MeetupForm';
import { MY_KEY } from '../../config.js';
class MeetupFormContainer extends React.Component {
  state = {
    eventData: {
      name: '',
      description: '',
      duration: '',
      date: '',
      time: '',
      directions: ''
    }
  };

  onChangeHandler = e => {
    let newValue = e.target.value;
    let name = e.target.name;
    console.log('name', name, this.state.eventData.directions);
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
    const { name, description, directions } = this.state.eventData;
    const APIkey = MY_KEY.meetupAPIKey;
    fetch(
      `https://api.meetup.com/2/event?key=${APIkey}&group_id=20411696&group_urlname=Learn-Teach-Code-Seoul&name=${name}&description=${description}&how_to_find_us=${directions}`,
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
