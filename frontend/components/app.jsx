import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import ListingsIndexContainer from './listings/listings_index_container';

const App = () => (
  <div className='header'>
    <GreetingContainer />
    <div>
      <ListingsIndexContainer />
      <img width='100%' src="https://goo.gl/nNSkx0"/>
    </div>
  </div>
);

export default App;
