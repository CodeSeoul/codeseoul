import React from 'react';
import { format } from 'util';
import CreateEventForm from '../presentational/CreateEventForm';
import { MY_KEY } from '../../config.js';
class CreateEventFormContainer extends React.Component {
  state = {
    eventData: {
      name: '',
      description: '',
      duration: '',
      date: '',
      time: '',
      directions: '',
      venueId: '25507426' //default wcoding
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
  convertTime = time => {
    let milliseconds =
      (Number(time.split(':')[0]) * 60 * 60 + Number(time.split(':')[1]) * 60) *
      1000;
    return milliseconds;
  };
  1534291200000;
  1534341600000;
  createEvent = e => {
    e.preventDefault();
    const {
      name,
      description,
      directions,
      venueId,
      date,
      time,
      duration
    } = this.state.eventData;
    let epochTime = new Date(date).valueOf();
    epochTime -= 32400000; //sets time to midnight of the date
    const startTime = this.convertTime(time);
    epochTime += startTime;
    //console.log('epochTime', epochTime);
    let eventDuration = duration * 60 * 60 * 1000; //set duration to milliseconds
    console.log('eventDuration', eventDuration);
    const APIkey = MY_KEY.meetupAPIKey;
    fetch(
      `https://api.meetup.com/2/event?key=${APIkey}&group_id=20411696&group_urlname=Learn-Teach-Code-Seoul&name=${name}&description=${description}&time=${epochTime}&duration=${eventDuration}&venue_id=${venueId}&how_to_find_us=${directions}&publish_status=draft`,
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
    console.log(this.convertTime(this.state.eventData.time));
    console.log('this.this.state.eventData', this.state.eventData);
    return (
      <CreateEventForm
        onChangeHandler={this.onChangeHandler}
        createEvent={this.createEvent}
        event={this.state.eventData}
      />
    );
  }
}

export default CreateEventFormContainer;
