import React from 'react';
import './App.css';

function Education(props) {
  return (
    <div className="Education">
        <span>
        <h3>{props.school}</h3>
        </span>
        <span>{props.date}</span>
        <span>{props.city}</span>
        <p className="education-area">{props.studies}</p>
    </div>
  );
}

export default Education;