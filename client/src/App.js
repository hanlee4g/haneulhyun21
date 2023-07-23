import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Her from './pages/her';
import Login from './pages/login';
import NotHer from './pages/nother';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/her" element={<Her />} />
        <Route path="/not-her" element={<NotHer />} />
      </Routes>
    </Router>
  );
}

export default App;
