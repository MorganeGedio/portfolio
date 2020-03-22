import React from 'react';
import Project from '../components/Project.js';
import '../css/App.css';
import '../css/Home.css';

const Home = () => (
    <div className="container">
      <div className="presentation">
        <h1>BONJOUR ! HELLO ! HOLA ! </h1>
        <h2> I'm Morgane. </h2>
        <div className="description">
          <p> I'm a Junior Full-Stack Developer from France, living in Berlin.</p>
          <p> I have a background in law and I have worked for 8 years as a technical advisor and an account manager. </p>
        </div>
      </div>
        <h2 className="header highlight-header">Projects</h2>
          <div className="project-container">
            <Project
            path="https://cocktail-hour.herokuapp.com/"
            image="https://res.cloudinary.com/frijolyfrailejon/image/upload/v1582715587/Portfolio/cocktail_hour-index_oy8rr7.png"
            title="Cocktail Hour"
            category="Le Wagon"
            description="Coming soon ..."
            />

             <Project
            path="https://whistle-island.herokuapp.com/"
            image="https://res.cloudinary.com/frijolyfrailejon/image/upload/v1582715588/Portfolio/whistle_island_home_dsds6e.png"
            title="Whistle Island"
            category="Le Wagon"
            description="Coming soon ..."
            />

             <Project
            path="https://www.whistle-app.com/"
            image="https://res.cloudinary.com/frijolyfrailejon/image/upload/v1582717019/Portfolio/whistle_laptop_rscg8k.png"
            title="Whistle"
            category="Le Wagon"
            description="Coming soon ..."
            />
          </div>
    </div>
);

export default Home;
