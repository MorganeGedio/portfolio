import React from 'react';
import './App.css';

function Language(props) {
  return (
    <div className="Language">
        <span>
        <span className="main-info">{props.language}</span>
        </span>
        <span>{props.level}</span>
    </div>
  );
}

export default Language;