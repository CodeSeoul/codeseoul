import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CarouselItem, ItemUl, ItemLi} from '../styles/CarouselComponentStyle';

const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover : true
  };

const Carousel = ({meetupArray}) => {
    const carouselItem = meetupArray.map((obj, i)=>{
       return (<CarouselItem key={i} background={obj.background}>
                <ItemUl>
                    <ItemLi>
                        Topic : {obj.title}
                    </ItemLi>
                    <ItemLi>
                        Date : {obj.date}
                    </ItemLi>
                    <ItemLi>
                        Host : {obj.host}
                    </ItemLi>
                </ItemUl>
              </CarouselItem>)
    });

    return (
            <Slider {...sliderSettings}>
                {carouselItem}
            </Slider>
    );
}

export {Carousel};

