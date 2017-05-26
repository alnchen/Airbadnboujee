import React from 'react';

class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    $('.home-transparent').parallax({imageSrc: 'https://goo.gl/nNSkx0'});
  }

  componentWillUnmount() {
    $('.parallax-mirror').remove();
  }

  render(){
    return (
      <div>
        <div className='home-transparent'>

          <div className='definition-container'>
            <div className='def-top'>
              <div className='boujee'>boujee:</div><div className='pronunciation'>[boo•jee]</div><div className='adjective'>adjective</div>
            </div>
          <div className='definition'>1. a critical term used to describe people, things, and places that are definitively high-class.</div>
          </div>

        </div>

        <div className='home-description'/>
      </div>
    );
  }
}

export default HomePage;


// <img src='https://goo.gl/nNSkx0'/>
