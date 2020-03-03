import React from 'react';
import './App.css';

function Experience(props) {
  return (
    <div className="Experience">
        <span>
        <a href={props.path} target="_blank">
            {props.company}
        </a>
        </span>
        <span>{props.date}</span>
        <span>{props.city}</span>
        <p className="experience-position">{props.position}</p>
    </div>
  );
}

export default Experience;