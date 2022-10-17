import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
