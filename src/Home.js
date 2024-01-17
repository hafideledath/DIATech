import { useEffect, useState } from 'react';
import './Home.css';
import getRandomString from './RandomString';
import Judges from './Judges';
import Date from './Date.mp4'

function Home() {
  const [randomString, setRandomString] = useState(getRandomString());
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomString(getRandomString());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    // Hamburger menu bar

    <div className="Home">
      <main>
        <div className="hero">
          <h1>DI@TECH<span className="separate"><span style={{fontWeight: 400, whiteSpace: "pre"}}> is </span>back.</span></h1>
          <div id="background">
            {randomString}
          </div>
        </div>
        <div className="event-info">
            <h2>June 25</h2>
            <h2>DIAEH PE Hall</h2>
            <h2>Sustainability and Innovation</h2>
          </div>
          <hr className='separation' />
          <h3>Innoventures Education's largest tech club is back and bigger than ever. Mark the date:</h3>
          <video src={Date} autoPlay muted id="animation" />
          <h2>Hear From Last Year's Winners</h2>
          <h3>Mayankh Agarwal | DI@Tech 2023 Year 10 Winning Team Leader</h3>
          <p>DI@TECH provided me an invaluable opportunity to socialize and understand other participants unique perspective on a common problem. Not only did this experience deepen my understaning about issues prevalent in urban cities (the theme for last year being smart cities) but also underscored the principal that fruits of your labour and dedication are endearing and rewarding.</p>
      </main>

        <footer>©2023 DI@Tech</footer>
    </div>
  );
}

export default Home;
