import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Game from './components/Game';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import NotFound from './components/NotFound';
import ScoreTable from './components/ScoreTable';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":gameId" element={<Game />} />
        <Route path="leaderboard" element={<Leaderboard />}>
          <Route index element={<ScoreTable />} />
          <Route path=":gameId" element={<ScoreTable />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
