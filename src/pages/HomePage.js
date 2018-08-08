import React from 'react';
import {Carousel} from '../components/CarouselComponent';
import {Header} from '../components/HeaderComponent';
import {Footer} from '../components/FooterComponent';

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


const HomePage = () => (
  <div>
    <Header />
    <Carousel meetupArray={placeholderData} />
    homepage
  </div>

);

export default HomePage;