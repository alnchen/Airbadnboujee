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
        <div className='home-transparent'/>
        <div className='home-description'/>
      </div>
    );
  }
}

export default HomePage;


// <img src='https://goo.gl/nNSkx0'/>
