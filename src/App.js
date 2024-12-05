import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Construction from './components/Construction/Construction';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
      <h1 class="team-builder">Team Builder</h1>
        <nav className="nav-bar">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/Construction" className="nav-button">Construction</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Construction" element={<Construction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
