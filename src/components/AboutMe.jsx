import React from 'react';
import headshot from '../assets/headshot1.jpg';

const AboutMe = () => {
  return (
    <div className="aboutme">
      <img className="headshot" src={headshot} alt="head-shot"/>
      <h1>Andrew Orodenker</h1>
      <h3>Software Engineer @ Galvanize</h3>
      <div className="about-block">
        <h4 className="about-header">About Me</h4>
        <p className="about-para">
        Full stack software engineer with strong communication skills and a
        graduate of Hack Reactor's software engineering immersive. Passionate
        about technology and innovation and I thrive in collaborative environments.
        I will add value to any team where meticulous attention to detail, dependability,
        proficiency in backend and frontend technologies, or strong communication are
        important qualities. In addition to backend and frontend software development
        I am also interested in interactive design and animation.
        <br/>
        Avid snowboarder with a fondness for unfamiliar cultures.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;