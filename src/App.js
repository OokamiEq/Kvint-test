// import Button from './components/Button';
import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import animation from './animations/INITIALIZE_1_HQ.json';
import './App.css';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false)
  const [hide, toggleHide] = useState(false);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".react-logo"),
      animationData: animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  })

  const handleLoading = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    setTimeout(() => {
      setLoaded(true)
    }, 3100)

  }

  // useEffect(() => {

  // }, []);

  // function handleAnimation() {

  // }

  return (
    <>
      {/* {isLoading &&  />} */}
      <div class="main">
        {!hide && <button type="click" className="open-button" onClick={() => { toggleHide(prev => !prev); handleLoading() }}>Click me</button>}
        {isLoading && <div className="react-logo"></div>}
        {loaded && <div class="widget">Привет, чем я могу помочь?</div>}
      </div>
      {/* <div class="main"></div> */}

      {/* <div id="react-logo" style={{ width: 200, height: 200 }} /> */}
    </>
  );
}

export default App;
