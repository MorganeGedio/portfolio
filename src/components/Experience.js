import React from 'react';
import '../css/App.css';

function Experience(props) {
  return (
    <div className="Experience">
        <span>
        <a href={props.path} target="_blank" className="main-info">
            {props.company}
        </a>
        </span>
        <span>{props.date}</span>
        <span>{props.city}</span>
        <p className="sub-info">{props.position}</p>
    </div>
  );
}

export default Experience;