import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import ListingsIndexContainer from './listings/listings_index_container';
import Home from './home/home';


const App = () => (
  <div className='header'>
    <GreetingContainer />
    <div>

      <Route exact path='/' component={Home}/>
      <Route path='/listings' component={ListingsIndexContainer}/>
    </div>
  </div>
);

export default App;
