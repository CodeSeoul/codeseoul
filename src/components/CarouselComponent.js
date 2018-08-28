import React from 'react';
import {CarouselItem, CarouselContainer, ContentClipper, ItemUl, ItemLi} from '../styles/CarouselComponentStyle';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

class CarouselComponent extends React.Component {
    state = {
        position: 0,
    }
    render = () => {
        const carouselItem = this.props.meetupArray.map((obj, i)=>{
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
            <ContentClipper>
                <CarouselContainer>
                    {carouselItem}
                </CarouselContainer>
            </ContentClipper>
        );
    }
}

export {CarouselComponent};

