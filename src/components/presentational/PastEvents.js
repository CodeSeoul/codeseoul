import React from 'react';
import { Events } from '../../styles/ShowingEvents';

const PastEvents = ({events}) => {
  const eventsUI = events.map((event, i)=>{
    const head = (i == 0? <div className="groupName">Past Events</div> : '')
    return (
    <Events key={i}>
      {head}
      <div className="eventInfo">
      {new Date(event.time).toLocaleString('en-US', {
          month: 'short',
          day: 'numeric'
        })}{', '}{event.name}
      </div>
    </Events>
  )
  });
  return(
    <div>
      {eventsUI}
    </div>
  );
}

export default PastEvents;