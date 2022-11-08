import React from 'react';
import emailIcon from '../assets/email-icon.png';
import linkedIn from '../assets/linked-in.jpg';

const Content = () => {
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
        <div className="container reveal fade-bottom my-journey">
          <h2>Bit of me</h2>
          <br />
          <br />
          <br />
          <br />
          <h3 className="meat">
            Having been a self-taught software engineer as a hobby over
            the past few years, in 2021 I stepped away from a 10 year
            career as a Team Leader at Trader Joes to attend Hack Reactor`s
            Software Engineering Immersive. The intricacies of code in
            tandem with the boundless languages, libraries, and frameworks
            stimulate my mind endlessly. My most recent muses have been three.js
            and particle.js.
            <br />
            <br />
            <br />
            Feel free to scroll around, play with the bubbles,
            or drop me a line via my contact information at
            the bottom of the page.
          </h3>
        </div>
      </section>
      <section className="projects">
        <div className="container reveal fade-bottom">
          <h2>Recent repos</h2>
        </div>
        <div className="proj container reveal fade-bottom">
          <div className="text-container gymx">
            <h3 className="text-box">
              <h2>
                <a href="https://github.com/Slytherin-Blue-Ocean/GymX5000" target="_blank" rel="noopener noreferrer">
                  GymX5000
                </a>
              </h2>
              Gamified fitness app that brings health,
              fitness and competition to living a healthy lifestyle,
              providing users with an all in one experience
              where you can stay motivated, eat healthy, get stronger,
              and compete with friends. This app uses a multipurpose
              card system that dynamically renders many different activties
              from a polymorphic postgreSQL database. GymX5000 includes a
              unique challenge feature that contains interactable 3D trophies created
              using three.js that are awarded upon completing tasks.
            </h3>
          </div>
        </div>
        <div className="duo">
          <div className="proj container reveal fade-left">
            <div className="text-container">
              <h3 className="text-box">
                <h2>
                  <a href="https://github.com/LinkSDC/productsSDC" target="_blank" rel="noopener noreferrer">
                    Atelier
                  </a>
                </h2>
                RESTful rebuild of a clothing API from the ground up, utilizing NGINX
                load balancing on AWS EC2 instances for horizontal scalability.
                Reduced average query speed from 250ms to 35ms through SQL query
                refactoring and indexing.
              </h3>
            </div>
          </div>
          <div className="proj container reveal fade-right">
            <div className="text-container">
              <h3 className="text-box">
                <h2>
                  <a href="https://github.com/CowardlyDogs/fec" target="_blank" rel="noopener noreferrer">
                    Cowardly Dogs
                  </a>
                </h2>
                E-commerce front end built in React. Features include product overview,
                related item carousel built from scratch (no bootstrap, mui, etc.), a
                user-decided outfit section persisting in local storage, user reviews as well
                as Q&A.
              </h3>
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
              <p>
                LinkedIn
              </p>
            </div>
            <div className="links">
              <a href="mailto:andrew.orodenker@gmail.com?subject=Hello!" target="_blank" rel="noopener noreferrer">
                <img alt="email" src={emailIcon} />
              </a>
              <p>
                Email
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;