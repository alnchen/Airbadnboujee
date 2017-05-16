import React from 'react';

const loggedOutLinks = () => (
  <nav>
    <Link className='navbarLinks' to="/help">Help</Link>
    <Link className='navbarLinks' to="/signup">Sign Up</Link>
    <Link className='navbarLinks' to="/login">Log In</Link>
  </nav>
);

const loggedInLinks = (currentUser, logout) => (
  <nav>
    <Link className='navbarLinks' to="/trips">Trips</Link>
    <Link className='navbarLinks' to="/messages">Help</Link>
  </nav>
);



const Greeting = () => {
  <nav>
    <Link className='navbarLinks' to="/host">Become a Host</Link>

  </nav>
};

export default Greeting;
