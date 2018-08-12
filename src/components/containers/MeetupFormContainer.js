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

  render() {
    return (
      <MeetupForm
        onChangeHandler={this.onChangeHandler}
        event={this.state.eventData}
      />
    );
  }
}

export default MeetupFormContainer;
