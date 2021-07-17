import React from 'react';
import Fembanner from './components/Fembanner';
import Tags from './components/Tags';
import Roadmap from './components/Roadmap';
import './App.css';

const App = () => {
  return (
    <main className='main-app'>
      <Fembanner />
      <Tags />
      <Roadmap />
    </main>
  );
};

export default App;
