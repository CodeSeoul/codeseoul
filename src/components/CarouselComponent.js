import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CarouselItem, CarouselContainer} from '../styles/CarouselComponentStyle';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const CarouselComponent = ({meetupArray}) => {
    const carouselItem = meetupArray.map((obj, i)=>{
       return (<CarouselItem key={i} background={obj.background}>
                <h3>
                {obj.title}
                </h3>
              </CarouselItem>)
    });

    return (
        <CarouselContainer>
            <Slider {...sliderSettings}>
                {carouselItem}
            </Slider>
        </CarouselContainer>
    );
}

export {CarouselComponent};

