import React from "react";
import { Events } from "../../../styles/pages/eventsPage/ShowingEvents";
import PropTypes from "prop-types";

const PastEvents = ({ events }) => {
  const eventsUI = events.map((event, i) => {
    const head = i == 0 ? <div className="groupName">Past Events</div> : "";
    return (
      <Events key={i}>
        {head}
        <div className="eventInfo">
          {new Date(event.time).toLocaleString("en-US", {
            month: "short",
            day: "numeric"
          })}
          {", "}
          {event.name}
        </div>
      </Events>
    );
  });
  return <div>{eventsUI}</div>;
};

PastEvents.propTypes = {
  events: PropTypes.array
};

export default PastEvents;
