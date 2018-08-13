import React from 'react';
import { ShowingEventsContainer, Events} from '../styles/ShowingEvents'

class MeetupPage extends React.Component {

  state={
    events : []
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

    const events = this.state.events.map(event=>
      <Events key={event.id}>
        {event.name}
        {event.local_date}
      </Events>)

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
        </section>
      </React.Fragment>
    )
  }
}

export default MeetupPage;