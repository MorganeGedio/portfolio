import React from 'react';
import '../css/App.css';
import '../css/Project.css';

function Project(props) {
  return (
    <div className="Project">
        <div className="project-image">
          <a href={props.path} target="_blank">
            <img src={props.image} alt="Project Image"/>
          </a>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
        <p className="project-description">{props.description}</p>
    </div>
  );
}

export default Project;
