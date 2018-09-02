import React from 'react';
import {CarouselItem, CarouselContainer, ContentClipper, ItemUl, ItemLi, SlideButton} from '../styles/CarouselComponentStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal/Modal';
import DetailedEventInfo from './DetailedEventInfo';

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

        show: false,
        clickedEvent: null,
        rsvps: []
    }
    //Open Modal
    ShowModal = (e, event) => {
      let newShow = this.state.show;
      this.setState({
        clickedEvent: event
      });
  
      //fetch attendees data
      fetch(
        `https://api.meetup.com/Learn-Teach-Code-Seoul/events/${event.id}/rsvps`
      )
        .then(res => res.json())
        .then(rsvps => {
          this.setState({
            rsvps: rsvps,
            show: !newShow
          });
        });
    };

    //Close Modal
    onClose = () => {
      let newShow = this.state.show;
      this.setState({
        show: !newShow
      });
    };

    getItemOrder(itemIndex){
        const { position } = this.state;
        const { events } = this.props;
        const numItems = events.length || 1; 

        if(itemIndex - position < 0){
            return numItems - Math.abs(itemIndex - position);
        }

        return itemIndex - position;
    }
    changeSlide = event => {
        const direction = event.currentTarget.value;
        let { position } = this.state;
        const { events } = this.props;
        const numItems = events.length || 1;
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
        const carouselItem = this.props.events.map((event, i)=>{
           return (
            <CarouselItem 
                key={i} 
                order={this.getItemOrder(i)} 
                background={event.background}
                onClick={e => this.ShowModal(e, event)}>
                <ItemUl>
                    <ItemLi style={{color:'gray'}}>
                        Date : {event.local_date}
                    </ItemLi>
                    <ItemLi style={{fontWeight:900, fontSize:'40px'}}>
                        Topic : {event.name}
                    </ItemLi>
                    <ItemLi>
                        {event.venue.name}
                    </ItemLi>
                </ItemUl>
            </CarouselItem>
            )
        });
    
        return (
            <div>
                <ContentClipper>
                    <SlideButton left value='prev' onClick={this.changeSlide}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </SlideButton>
                    <CarouselContainer 
                        isSliding={this.state.isSliding} 
                        direction={this.state.direction}>
                        {carouselItem}
                    </CarouselContainer>
                    <SlideButton value='next' onClick={this.changeSlide}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </SlideButton>
                </ContentClipper>
                
                <Modal show={this.state.show} onClose={() => this.onClose()}>
                    <DetailedEventInfo
                    eventInfo={this.state.clickedEvent}
                    rsvps={this.state.rsvps}
                    />
                </Modal>
            </div>
        );
    }
}

export {CarouselComponent};

