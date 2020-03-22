import React from 'react';
import '../css/App.css';

function Education(props) {
  return (
    <div className="Education">
        <span>
        <span className="main-info">{props.school}</span>
        </span>
        <span>{props.date}</span>
        <span>{props.city}</span>
        <p className="sub-info">{props.studies}</p>
    </div>
  );
}

export default Education;