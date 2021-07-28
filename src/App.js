import React from 'react';
import Home from './components/pages/Home';
import RoadmapPage from './components/pages/RoadmapPage';
import DataState from './context/data/DataState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <main className='main-app'>
        <DataState>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/roadmappage' component={RoadmapPage} />
          </Switch>
        </DataState>
      </main>
    </Router>
  );
};

export default App;
