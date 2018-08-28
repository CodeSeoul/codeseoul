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
    getItemOrder(itemIndex){
        const { position } = this.state;
        const { meetupArray } = this.props;
        const numItems = meetupArray.length || 1; 

        if(itemIndex - position < 0){
            return numItems - Math.abs(itemIndex - position);
        }

        return itemIndex - position;
    }
    render = () => {
        const carouselItem = this.props.meetupArray.map((child, i)=>{
           return (<CarouselItem key={i} order={this.getItemOrder(i)} background={child.background}>
            <ItemUl>
                <ItemLi>
                    Topic : {child.title}
                </ItemLi>
                <ItemLi>
                    Date : {child.date}
                </ItemLi>
                <ItemLi>
                    Host : {child.host}
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

