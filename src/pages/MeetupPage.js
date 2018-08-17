import React from "react";
import {
  ShowingEventsContainer,
  Events,
  LoadMoreEvents,
  CurrentEventsSection
} from "../styles/ShowingEvents";
import DetailedEventInfo from "../components/DetailedEventInfo";
import Modal from "../components/Modal/Modal";

class MeetupPage extends React.Component {
  state = {
    events: [],
    numberOfEvents: 2,
    show: false,
    clickedEvent: null,
    rsvps: []
  };

  ShowModal = (e, event) => {
    let newShow = this.state.show;
    this.setState({
      clickedEvent: event
    });

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
    console.log(this.state);
  };

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
    fetch("https://api.meetup.com/Learn-Teach-Code-Seoul/events")
      .then(res => res.json())
      .then(events => {
        this.setState({
          events: events
        });
      });
  }

  render() {
    const events = this.state.events
      .filter(event => event.status === "upcoming")
      .map((event, index) => {
        return index <= this.state.numberOfEvents ? (
          <Events key={event.id} onClick={e => this.ShowModal(e, event)}>
            <div className="groupName">{event.group.name}</div>
            <div className="eventInfo">
              {event.name}
              <br />
              {new Date(event.time).toLocaleString("en-US", {
                month: "short",
                day: "numeric"
              })}{" "}
              {event.local_time}
            </div>
          </Events>
        ) : null;
      });

    return (
      <React.Fragment>
        <header>Meetup page</header>
        {/* Creating an event */}
        <section>Create an event</section>

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
    );
  }
}

export default MeetupPage;
