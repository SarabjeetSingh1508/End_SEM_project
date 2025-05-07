import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Leaderboard from './pages/Leaderboard';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leader" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </>
  );
}

export default App;
