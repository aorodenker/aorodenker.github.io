import React from 'react';
import Content from './components/Content';
import ParticleAnimation from './components/ParticleAnimation';

const App = () => {
  return (
    <div className="app">
      <ParticleAnimation />
      <Content />
    </div>
  );
};

export default App;
