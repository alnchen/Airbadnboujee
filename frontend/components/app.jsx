import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SearchContainer from './listings/search_container';
import Home from './home/home';
import Footer from './footer/footer';
import ListingsDetailContainer from './listings/listings_detail_container';


const App = () => (
  <div className='header'>
    <GreetingContainer />
    <div className="app-body">
      <Route exact path='/' component={Home}/>
      <Route exact path="/listings/:id" component={ListingsDetailContainer} />
      <Route exact path='/listings' component={SearchContainer}/>
    </div>
    <Footer />
  </div>
);

export default App;
