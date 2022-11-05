import React from 'react';
import emailIcon from '../assets/email-icon.png';
import linkedIn from '../assets/linked-in.jpg';
import resumeIcon from '../assets/resume-icon.png';


const email = 'andrew.orodenker@gmail.com';

const Test = () => {
  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <>
      <section className="hey">
        <h3>Hey, I'm</h3>
        <h1>Andrew Orodenker</h1>
      </section>
      <section>
        <div className="container reveal fade-bottom">
          <h2>My journey</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </section>
      <section className="projects">
        <div className="container reveal fade-bottom">
          <h2>Recent projects</h2>
        </div>
        <div className="container reveal fade-left">
          <div className="text-container gymx">
            <h3>
              <a href="https://github.com/Slytherin-Blue-Ocean/GymX5000" target="_blank" rel="noopener noreferrer">
                GymX5000
              </a>
            </h3>
            <div className="text-box">
            Fitness app that brings health,
            fitness and a fun video game aspect to living a healthy lifestyle,
            providing users with an all in one experience
            where you can stay motivated, eat healthy, get stronger,
            and compete with friends. This app uses a multipurpose
            card system that dynamically renders many different activties
            from a polymorphic postgreSQL database. GymX5000 includes a
            unique challenge feature that contains interactable 3D models
            of trophies that are awarded upon completing tasks.
            </div>
          </div>
        </div>
        <div className="container reveal fade-right">
          <div className="text-container gymx">
            <h3>
              <a href="https://github.com/LinkSDC/productsSDC" target="_blank" rel="noopener noreferrer">
                Atelier
              </a>
            </h3>
            <div className="text-box">
            </div>
          </div>
        </div>
        <div className="container reveal fade-left">
          <div className="text-container gymx">
            <h3>
              <a href="https://github.com/CowardlyDogs/fec" target="_blank" rel="noopener noreferrer">
                Cowardly Dogs
              </a>
            </h3>
            <div className="text-box">
            Front end for an interactive,
            responsive e-commerce web app, featuring a product overview,
            related items, user-decided outfit section, reviews, and Q&A.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container reveal fade-bottom">
          <h2>Thanks for stopping by</h2>
          <div className="links-container">
            <div className="links">
              <a href="https://www.linkedin.com/in/orodenker/" target="_blank" rel="noopener noreferrer">
                <img alt="linkedIn" src={linkedIn} />
              </a>
            </div>
            <div className="links">
              <a href={email} target="_blank" rel="noopener noreferrer">
                <img alt="email" src={emailIcon} />
              </a>
            </div>
            <div className="links">
              <a href={email} target="_blank" rel="noopener noreferrer">
              <img src={resumeIcon} alt="Resume img" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;