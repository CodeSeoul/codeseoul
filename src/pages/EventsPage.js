import React from 'react';
import {
  ShowingEventsContainer,
  Events,
  LoadMoreEvents,
  CurrentEventsSection
} from '../styles/ShowingEvents';
import EventsPageWrapper from '../styles/pages/eventsPage';
import CreateEventFormContainer from '../components/containers/CreateEventFormContainer';
import ToggleDisplay from '../components/helper/ToggleDisplay';
import IsAdmin from '../components/helper/IsAdmin';
import DetailedEventInfo from '../components/DetailedEventInfo';
import Modal from '../components/Modal/Modal';

class EventsPage extends React.Component {
  state = {
    events: [],
    numberOfEvents: 2,
    show: false,
    clickedEvent: null,
    rsvps: []
  };

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

  ShowMoreEvents = e => {
    e.preventDefault();
    let newNumberOfEvents = this.state.numberOfEvents;
    newNumberOfEvents = newNumberOfEvents + 3;
    this.setState({
      numberOfEvents: newNumberOfEvents
    });
  };

  componentDidMount() {
    fetch('https://api.meetup.com/Learn-Teach-Code-Seoul/events')
      .then(res => res.json())
      .then(events => {
        this.setState({
          events: events
        });
      });
  }

  render() {
    const { Header } = EventsPageWrapper;
    const events = this.state.events
      .filter(event => event.status === 'upcoming')
      .map((event, index) => {
        return (
          <Events
            className={
              index < 3
                ? ''
                : index <= this.state.numberOfEvents
                  ? 'visible'
                  : 'invisible'
            }
            key={event.id}
            onClick={e => this.ShowModal(e, event)}
          >
            <div className="groupName">{event.group.name}</div>
            <div className="eventInfo">
              {event.name}
              <br />
              {new Date(event.time).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric'
              })}{', '}
              {event.local_time}
            </div>
          </Events>
        );
      });

    return (
      <EventsPageWrapper>
        <React.Fragment>
          <Header>Meetup page</Header>
          {/* Creating an event */}
          <section>
            <IsAdmin>
              <ToggleDisplay buttonText="Create New Event">
                <CreateEventFormContainer />
              </ToggleDisplay>
            </IsAdmin>
          </section>
          {/* Showing current events */}
          <CurrentEventsSection>
            <div className="title">Current Events</div>
            <ShowingEventsContainer>{events}</ShowingEventsContainer>
            <LoadMoreEvents onClick={e => this.ShowMoreEvents(e)}>
              More Events
            </LoadMoreEvents>
          </CurrentEventsSection>

          {/* Modal */}

          <Modal show={this.state.show} onClose={() => this.onClose()}>
            <DetailedEventInfo
              eventInfo={this.state.clickedEvent}
              rsvps={this.state.rsvps}
            />
          </Modal>
        </React.Fragment>
      </EventsPageWrapper>
    );
  }
}

export default EventsPage;
