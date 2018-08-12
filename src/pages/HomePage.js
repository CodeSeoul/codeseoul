import React from 'react';
import {HeaderComponent} from '../components/HeaderComponent';
import {FooterComponent} from '../components/FooterComponent';
import {Row, Col} from 'react-materialize';
import {Carousel} from '../components/CarouselComponent'; 
import {Calendar} from '../components/CalendarComponent';
import { BodyContainer } from '../styles/HomePageStyle';

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

const componentContainer = {
  textAlign: 'center',
  background: '#888',
  height: '181px',
  margin: '10px 0px'
};

const HomePage = () => (
  <div>
    <HeaderComponent />
      <BodyContainer>
        <Row>
            <Col style={componentContainer} className={"s12 m12 l6"}> <Calendar /> </Col>
            <Col style={{...componentContainer, background:'#fff'}} className={"s12 m12 l6"}> <Carousel meetupArray={placeholderData}/> </Col>
            <Col style={componentContainer} className={"s12 m12 l6"}> Previous Meetups </Col>
            <Col style={componentContainer} className={"s12 m12 l6"}> Resources </Col>
            <Col style={componentContainer} className={"s12 m12 l6"}> FAQ </Col>
            <Col style={componentContainer} className={"s12 m12 l6"}> Q&A </Col>
        </Row>
      </BodyContainer>

    <FooterComponent />
  </div>

);

export default HomePage;