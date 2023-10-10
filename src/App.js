import { useEffect, useState } from 'react';
import './App.css';
import getRandomString from './RandomString';
import Judges from './Judges';
import Date from './Date.mp4'

import Nav from './Nav';

function App() {
  const [randomString, setRandomString] = useState(getRandomString());
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomString(getRandomString());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div id="gradient" />
      <div className="hero">
        <Nav />
        <h1>DIA@Tech<span className="separate"><span style={{fontWeight: 400, whiteSpace: "pre"}}> is </span>back.</span></h1>
        <div id="background">
          {randomString}
        </div>
      </div>
      <div className="event-info">
          <h2>June ??</h2>
          <h2>DIAEH PE Hall</h2>
          <h2>Theme</h2>
          <h2>?? teams</h2>
        </div>

        <h3>Innoventures Education's largest tech club is back and bigger than ever. Mark the date.</h3>

        <video src={Date} autoPlay muted id="animation" />

        <h2>Theme</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio error reprehenderit commodi obcaecati ipsam assumenda vero corporis vel quia necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt possimus commodi odio nisi dolore dolor eum dignissimos, voluptatem fugit.</p>

        <h2>Meet the Team</h2>

        <Judges />

        <h2>Hear From Last Year's Winners</h2>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eum eligendi molestiae ut id eius suscipit reiciendis esse quos, temporibus natus magni neque vero, a consequuntur alias ab odio optio minima unde nemo! Atque rem recusandae quos aspernatur minus rerum, pariatur quod praesentium mollitia dolorum in sit voluptatem sapiente consequatur nulla consectetur tempora eius veritatis? Expedita et quam, doloremque vitae esse natus assumenda rerum voluptatem architecto. Numquam libero magnam vel fuga recusandae adipisci molestias magni soluta facere perspiciatis voluptate, illo assumenda quo laboriosam praesentium asperiores voluptas aliquid delectus distinctio molestiae? Voluptate dicta sequi ducimus nesciunt deserunt ratione beatae distinctio obcaecati?</p>

        <footer>©2023 DI@Tech</footer>
    </div>
  );
}

export default App;
