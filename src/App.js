import React from 'react';
import Fembanner from './components/Fembanner';
import Tags from './components/Tags';
import Roadmap from './components/Roadmap';
import DataState from './context/data/DataState';
import './App.css';

const App = () => {
  return (
    <main className='main-app'>
      <DataState>
        <Fembanner />
        <Tags />
        <Roadmap />
      </DataState>
    </main>
  );
};

export default App;
