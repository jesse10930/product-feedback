import React from 'react';
import Sidebar from './components/Sidebar';
import DataState from './context/data/DataState';
import SuggestionsContainer from './components/SuggestionsContainer';
import './App.css';

const App = () => {
  return (
    <main className='main-app'>
      <DataState>
        <div id='sidebar-sugg-layout'>
          <Sidebar />
          <SuggestionsContainer />
        </div>
      </DataState>
    </main>
  );
};

export default App;
