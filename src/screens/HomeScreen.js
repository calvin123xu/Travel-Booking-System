import React from 'react'
import HomePic from '../HomePic.gif'

function HomeScreen() {
  const backgroundStyle = {
    position: 'fixed', // Fixed or absolute depending on whether you want it to scroll with the page
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${HomePic})`,
    backgroundSize: 'cover', // This ensures the image covers the full view without stretching
    backgroundPosition: 'center center',
    zIndex: -1, // Places the image behind everything else
  };

  const textStyle = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // An example of a font family
    fontSize: '2rem', 
    position: 'absolute',
    top: '17%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // This centers the text block
    color: 'Black', // Choose a text color that contrasts well with your background image,
    zIndex: 10, // Higher index to ensure text is above the background
    textAlign: 'center', // Center text if more than one line
    width: '100%', // Ensures the text container is full width
  };

  return (
    <div>
      <div style={backgroundStyle} /> {/* This div is for the background image */}
      <div style={textStyle}>
        <h3>WELCOME TO CONCORDIA TRAVEL</h3>
      </div>
    </div>
  );
}

export default HomeScreen;