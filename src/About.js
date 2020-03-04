import React from "react";
import Experience from './Experience.js';
import Education from './Education.js';
import './About.css';

const About = () => (
    <div>
      <div className="about-container">
          <div className="experience-container">
            <h2 className="about-header highlight-header">Experience</h2>
              <Experience
                path="https://www.lewagon.com/"
                company="Le Wagon"
                date="January 2020 - now"
                city=" | Berlin"
                position="Teaching Assistant"
              />

              <Experience
                path="https://www.hubspot.com/"
                company="HubSpot"
                date="February 2019 - August 2019"
                city=" | Berlin"
                position="Technical Support"
              />

              <Experience
                path="https://www.mbfs.com/home"
                company="Mercedes Benz Financial Services"
                date="August 2016 - November 2017"
                city=" | Berlin"
                position="Account Manager"
              />

              <Experience
                path="https://www.booking.com/"
                company="Booking.com"
                date="March 2014 - November 2015"
                city=" | Berlin"
                position="Customer and Partner Service Executive"
              />

              <Experience
                path="/"
                company="Perry & Knorr"
                date="May 2012 - February 2014"
                city=" | Berlin"
                position="Technical Advisor in Webhosting"
              />
    </div>
      <div className="education-container">
        <h2 className="about-header highlight-header">Education</h2>
            <div className="education-container">
              <Education
                school="Le Wagon"
                date="2019"
                city=" | Berlin"
                studies="Full-Stack Coding Bootcamp"
              />

              <Education
                school="IESE Business School"
                date="2017"
                city=" | Online certification"
                studies="Foundation of management"
              />

              <Education
                school="University Jean Moulin"
                date="2010"
                city=" | Lyon [FR]"
                studies="Bachelor in Private Law"
              />
          </div>
        </div>
      </div>
  </div>
);

export default About;
