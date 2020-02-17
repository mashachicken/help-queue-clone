import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const ticketStyle = {
    'fontSize': '8vh',
    'display': 'grid',
    'gridTemplateColumns': '2fr 1fr 9fr',
    'alignItems': 'center',
    'minHeight': '15vh',
    'fontFamily': 'sans-serif'
  }
  const locationStyle = {
    'minWidth': '3em',
    'maxWidth': '10vw',
    'paddingLeft': '10px'
  }
  const timeStyle = {
    'fontSize': '6vh',
    'minWidth': '4em',
    'maxWidth': '15vw',
    'color': '#777'
  }
  const nameStyle = {
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'fontSize': '8vh'
  }
  const timeStamp = () => {
    const timeElapsed = Date.now() - parseInt(props.timestamp);
    const minutes = Math.floor(timeElapsed / 60000);
    let timeString
    if (minutes < 1) {
      timeString = "<1m";
    } else {
      timeString = `${minutes}m`
    }
    return timeString;
  }
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
