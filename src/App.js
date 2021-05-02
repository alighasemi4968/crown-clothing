import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = props => (
  <div>
    <h1>HATS PAGE</h1>
    <Link to={`${props.match.url}/13`}>Topic 13</Link>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
