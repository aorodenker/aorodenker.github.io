import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gymxPath from '../assets/gymx.md';
import atelierPath from '../assets/atelier.md';
import cowardlyPath from '../assets/cowardly.md';

const Projects = () => {
  const [clicked, setClicked] = useState('GymX5000')
  const [project, setProject] = useState('');

  useEffect(() => {
    let url;
    if (clicked === 'GymX5000') {
      url = gymxPath;
    };
    if (clicked === 'Atelier') {
      url = atelierPath;
    };
    if (clicked === 'Cowardly Dogs') {
      url = cowardlyPath;
    };
    fetch(url)
    .then((response) => response.text())
    .then((text) => {
      setProject(text)
    });
  }, [clicked]);

  const handleClick = (e) => {
    const proj = e.target.innerHTML;
    setClicked(proj);
  }

  return (
    <div className="projects">
      <h1>Recent Projects</h1>
      <div className="proj-name-container">
        <h3 onClick={(e) => handleClick(e)}>GymX5000</h3>
        <h3 onClick={(e) => handleClick(e)}>Cowardly Dogs</h3>
        <h3 onClick={(e) => handleClick(e)}>Atelier</h3>
      </div>
      <div className="proj-content">
        <ReactMarkdown children={project}/>
      </div>
    </div>
  );
};

export default Projects;