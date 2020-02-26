import React from 'react';
import Project from './Project.js';
import './App.css';
import './Project.css';

const Home = () => (
    <div>
        <h1>Bonjour ! Hello ! Hola ! </h1>
        <h1> I am Morgane. </h1>
          <p> I am a Junior Full-Stack Developer with technical advisor and account manager background. </p>
        <h2>Projects</h2>
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
