import React from 'react';
import {CarouselItem, CarouselContainer, ContentClipper, ItemUl, ItemLi, ArrowButton} from '../styles/CarouselComponentStyle';
import chevronRight from './../res/chevron-right.svg';
import chevronLeft from './../res/chevron-left.svg';

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
        direction: 'next',
        isSliding: false,
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
    changeSlide = event => {
        const direction = event.target.value;
        let { position } = this.state;
        const { meetupArray } = this.props;
        const numItems = meetupArray.length || 1;
        if(direction == 'next'){
            position = position === numItems - 1 ? 0 : position + 1;
            this.startSlide('next', position);
        }
        else {
            position = position === 0 ? numItems - 1 : position - 1;
            this.startSlide('prev', position);
        }
    }
    startSlide = (direction, position) => {
        this.setState({isSliding: true, direction, position});
        
        setTimeout(()=>{
            this.setState({isSliding: false});
        }, 50)
    }
    render = () => {
        const carouselItem = this.props.meetupArray.map((child, i)=>{
           return (<CarouselItem key={i} order={this.getItemOrder(i)} background={child.background}>
           <ArrowButton>
               <img src={chevronLeft}/>
           </ArrowButton>
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
            <ArrowButton>
                <img src={chevronRight}/>
            </ArrowButton>
            </CarouselItem>)
        });
    
        return (
            <ContentClipper>
                <CarouselContainer 
                    isSliding={this.state.isSliding} 
                    direction={this.state.direction}>
                    {carouselItem}
                </CarouselContainer>
                <button value='prev' onClick={this.changeSlide}>prev</button>
                <button value='next' onClick={this.changeSlide}>next</button>
            </ContentClipper>
        );
    }
}

export {CarouselComponent};

