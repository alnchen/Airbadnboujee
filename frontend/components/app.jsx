import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';


const App = () => (
  <div className='header'>
    <GreetingContainer />
  </div>
);

export default App;
