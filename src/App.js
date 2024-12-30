import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import SciencePage  from './Sciencepage';
import HomePage from './Home_page';
import AnimatedShow from './AnimatedShow';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Other routes */}
        <Route path="/science" element={<SciencePage />} />
        <Route path="/" element={<HomePage />} />    
            <Route path="/animated-shadow" element={<AnimatedShow />} />

        
      </Routes>
    </Router>
  );
}

export default App;
