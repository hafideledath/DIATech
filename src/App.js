import { useEffect, useState } from 'react';
import './App.css';
import getRandomString from './RandomString';
import Judges from './Judges';

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
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="c" r="100%" cx="34%" cy="70%"><stop offset="0%" stop-color="#da7eb7"/><stop offset="100%" stop-color="#b3a0ef"/></radialGradient><clipPath id="b"><path fill="currentColor" d="M813.5 664.5Q763 829 596 819.5t-352.5-58Q58 713 116 528t181-282q123-97 300.5-94t222 175.5q44.5 172.5-6 337Z"/></clipPath><filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh"><feFlood flood-color="#fff" result="neutral-gray"/><feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise"/><feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise"/><feComponentTransfer in="desaturatedNoise" result="theNoise"><feFuncA type="table" tableValues="0 0 0.4 0"/></feComponentTransfer><feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image"/></filter></defs><g filter="url(#a)" clip-path="url(#b)"><path fill="url(#c)" d="M813.5 664.5Q763 829 596 819.5t-352.5-58Q58 713 116 528t181-282q123-97 300.5-94t222 175.5q44.5 172.5-6 337Z"/></g></svg>
      <div className="hero">
        <Nav />
        <h1>DIA@Tech<span className="separate"><span style={{fontWeight: 400, whiteSpace: "pre"}}> is </span>back.</span></h1>
        <div className="background">
          {randomString}
        </div>
      </div>
      <div className="event-info">
          <h2>June ??</h2>
          <h2>DIAEH PE Hall</h2>
          <h2>Theme</h2>
          <h2>?? teams</h2>
        </div>

        <h3>Innoventures Education's largest tech club is back and bigger than ever.</h3>

        <img id="main-img" src="https://placehold.co/1200x200" style={{display: "block", margin: "20px auto 40px", borderRadius: "5px", width: "95%"}} alt="DI@Tech logo" />

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
