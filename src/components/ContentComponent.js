import React from 'react';
import {Row, Col} from 'react-materialize';
import {Carousel} from '../components/CarouselComponent';

const ContentComponent = ({meetupArray}) =>{

    return (
        <Row>
            <Col className={"s12 m12 l6"} > Calendar </Col>
            <Col className={"s12 m12 l6"} > <Carousel meetupArray={meetupArray}/> </Col>
            <Col className={"s12 m12 l6"} > FAQ </Col>
            <Col className={"s12 m12 l6"} > Previous Meetups </Col>
            <Col className={"s12 m12 l6"} > Resources </Col>
        </Row>
    );
}

export {ContentComponent};