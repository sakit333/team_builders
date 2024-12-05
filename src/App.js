import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
      <h1 class="team-builder">Team Builder</h1>
        <nav className="nav-bar">
          <Link to="/" className="nav-button">Home</Link>
          {/* <Link to="/signup" className="nav-button">Signup</Link> */}
          {/* <Link to="/login" className="nav-button">Login</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
