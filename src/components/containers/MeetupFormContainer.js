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

  render() {
    return <MeetupForm />;
  }
}

export default MeetupFormContainer;
