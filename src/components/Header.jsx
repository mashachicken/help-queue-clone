import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const headerStyle = {
    'backgroundColor': '#f05a26',
    'textAlign': 'center',
    'color': 'white',
    'margin': '0',
    'fontFamily': "'Nixie One', cursive",
    'width': '100%',
    'height': '50px',
    'padding': '9px 0px 0px 0px'
  };

  const headerH1 = {
    'fontSize': '30px'
  };

  return (
    <div style={headerStyle}>
      <h1 style={headerH1}>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
