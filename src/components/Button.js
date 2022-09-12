import React, { useEffect } from 'react';
import './styles.css';
import lottie from 'lottie-web';
import animation from '../animations/INITIALIZE_1_HQ.json';

function Button() {

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: animation
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <div id="react-logo" style={{ width: 200, height: 200 }} />
    </div>
  );
}

export default Button
