import React from 'react';
import CreateEventForm from '../presentational/CreateEventForm';
import { MY_KEY } from '../../config.js';
class CreateEventFormContainer extends React.Component {
  state = {
    eventData: {
      name: '',
      description: '',
      duration: '',
      date: '',
      startTime: '',
      endTime: '',
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

  createEvent = e => {
    e.preventDefault();
    const {
      name,
      description,
      directions,
      venueId,
      date,
      startTime,
      endTime
    } = this.state.eventData;
    let epochTime = new Date(date).valueOf();
    epochTime -= 32400000; //sets time to midnight of the date
    const eventStartTime = this.convertTime(startTime);
    epochTime += eventStartTime;
    //console.log('epochTime', epochTime);
    const eventEndTime = this.convertTime(endTime);
    let eventDuration = eventEndTime - eventStartTime;
    console.log('eventDuration', eventDuration);
    console.log('startTime', startTime);
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
      .catch(err => console.log('error:', err))
      .then(data => {
        console.log('response data', data);
        this.props.handleToggle();
      });
  };
  render() {
    console.log('this.state.eventData', this.state.eventData);
    return (
      <CreateEventForm
        onChangeHandler={this.onChangeHandler}
        createEvent={this.createEvent}
        event={this.state.eventData}
        closeForm={this.props.handleToggle}
      />
    );
  }
}

export default CreateEventFormContainer;
