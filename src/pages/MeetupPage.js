import React from 'react';
import { ShowingEventsContainer, Events, LoadMoreEvents} from '../styles/ShowingEvents'
import DetailedEventInfo from '../components/DetailedEventInfo'
import Modal from '../components/Modal/Modal'

class MeetupPage extends React.Component {

  state={
    events : [],
    numberOfEvents : 2,
    show : false,
    clickedEvent : 'sdfsdf'
  }

  ShowModal= (e, event)=>{
    let newShow = this.state.show
    this.setState({
      show : !newShow,
      clickedEvent : event
    })
    console.log(this.state.clickedEvent)
  }

  onClose= ()=>{
    let newShow = this.state.show
    this.setState({
      show : !newShow
    })
  }
  

  ShowMoreEvents= (e)=>{
    e.preventDefault();
    let newNumberOfEvents= this.state.numberOfEvents;
    newNumberOfEvents = newNumberOfEvents +3;
    this.setState({
      numberOfEvents : newNumberOfEvents
    })
  }

  componentDidMount(){

    fetch("https://api.meetup.com/Learn-Teach-Code-Seoul/events")
    .then(res=>res.json())
    .then(events=>{
      this.setState({
        events : events
      })
    })
  }

  render(){

    const events = this.state.events.filter(event=>event.status === 'upcoming').map((event, index)=>
      { 
        return (
        index <=this.state.numberOfEvents ?
          (<Events
            key={event.id}
            onClick = {(e)=>this.ShowModal(e, event)}
            >
            <div>
              {event.group.name}
            </div>
            <div>
              {event.name}
              <br/>
              {event.local_date} {event.local_time}
            </div>
          </Events>)
         : null
        )
      }
    )

    return(
      <React.Fragment>
        <header>Meetup page</header>
        {/* Creating an event */}
        <section>
          Create an event
        </section>

        {/* Showing current events */}
        <section>
          <div>
            Current events
          </div>
          <ShowingEventsContainer>
            {events}
          </ShowingEventsContainer>
          <LoadMoreEvents onClick = {(e)=>this.ShowMoreEvents(e)}>More Events</LoadMoreEvents>
        </section>

        {/* Modal */}

        <Modal show={this.state.show} onClose={()=>this.onClose()}>
          <DetailedEventInfo eventInfo = {this.state.clickedEvent}/>
        </Modal>

      </React.Fragment>
    )
  }
}

export default MeetupPage;


