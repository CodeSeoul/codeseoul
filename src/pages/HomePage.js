import React from 'react';
import {CarouselComponent} from '../components/CarouselComponent';
import PastEvents from '../components/presentational/PastEvents';

const placeholderData = [
  {  
      'title':'Meetup #1',
      'date' : '2018-08-29 14:00',
      'host' : 'Instructor A',
      'background': '#e1f7d5',
      'link': '#link1'
  },
  {
      'title':'Meetup #2',
      'date' : '2018-08-12 15:00',
      'host' : 'Instructor B',
      'background': '	#ffbdbd',
      'link': '#link2'
  },
  {
      'title':'Meetup #3',
      'date' : '2018-08-18 13:00',
      'host' : 'Instructor C',
      'background': '#c9c9ff',
      'link': '#link3'
  },
];


class HomePage extends React.Component{
  state = {
    pastEvents: []
  }

  componentDidMount() {
    fetch('https://api.meetup.com/Learn-Teach-Code-Seoul/events?status=past&page=4&desc=true')
      .then(res => res.json())
      .then(events => {
        this.setState({
          pastEvents: events
        });
      });
  }

  render = () => {
    console.log(this.state.pastEvents);
    return (
      <div>homepage
        <CarouselComponent meetupArray={placeholderData} />
        <PastEvents events={this.state.pastEvents}/>
      </div>

    );
  }
} 

export default HomePage;