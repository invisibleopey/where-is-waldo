import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Game from './components/Game';
import Home from './components/Home';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
