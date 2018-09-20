import React from "react";
import { DetailedEventInfoStyle } from "../../../styles/pages/EventsPage/ShowingEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const DetailedEventInfo = props => {
  const { name, description, time, local_time, duration } = props.eventInfo;

  const members = props.rsvps.map((rsvp, index) => {
    console.log(rsvp)
    return (
      <div key={index}>
        
        {rsvp.member.name}
        {rsvp.member.photo ? <img alt="error" src={rsvp.member.photo.photo_link}/> : <div><FontAwesomeIcon icon={faUser} size="4x" transform="down-2"/></div>}
      </div>
    );
  });

  return (
    <DetailedEventInfoStyle>
      {/* event name */}
      <h1>{name}</h1>
      {/* event time */}
      <div>
        {new Date(time).toLocaleString("us-GB", {
          month: "short",
          day: "numeric"
        })}{", "}
        {local_time} ~{" "}
        {new Date(time + duration).toLocaleString("en-GB", {
          hour: "numeric",
          minute: "2-digit"
        })}
      </div>
      <hr />
      {/* event details */}
      <h2>Details</h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {/* event attendees */}
      <h2>Attendees</h2>
      <div className="image-container">{members}</div>
    </DetailedEventInfoStyle>
  );
};

DetailedEventInfo.propTypes ={
  eventInfo : PropTypes.shape({
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    time  : PropTypes.number.isRequired,
    local_time : PropTypes.string.isRequired,
    duration : PropTypes.number.isRequired
  })
}

export default DetailedEventInfo;
