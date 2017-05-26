import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SearchContainer from './listings/search_container';
import HomeContainer from './home/home_container';
import Footer from './footer/footer';
import ListingsDetailContainer from './listings/listings_detail_container';
import BookingsContainer from './bookings/booking_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='header'>
    <GreetingContainer />
    <div className="app-body">
      <Route exact path='/' component={HomeContainer}/>
      <Route exact path="/listings/:id" component={ListingsDetailContainer} />
      <Route exact path='/listings' component={SearchContainer}/>
      <AuthRoute path='/trips' component={BookingsContainer}/>
    </div>
    <Footer />
  </div>
);

export default App;
