import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Mission from './Mission';
import Events from './Events';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <div id="gradient" />
        <Nav />

        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mission' element={<Mission />} />
                <Route path='/events' element={<Events />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
