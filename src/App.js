import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Team from './Team';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <div id="gradient" />
        <Nav />

        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/team' element={<Team />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
