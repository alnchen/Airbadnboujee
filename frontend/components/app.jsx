import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import ListingsIndexContainer from './listings/listings_index_container';
import Home from './home/home';
import Footer from './footer/footer';

const App = () => (
  <div className='header'>
    <GreetingContainer />
    <div>

      <Route exact path='/' component={Home}/>
      <Route path='/listings' component={ListingsIndexContainer}/>
    </div>
    <Footer />
  </div>
);

export default App;
