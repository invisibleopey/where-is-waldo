import React from 'react';
import BeachThumbnail from '../assets/images/beach thumbnail.png';
import SnowThumbnail from '../assets/images/snow thumbnail.png';
import SpaceThumbnail from '../assets/images/space thumbnail.png';
import { Link, Outlet } from 'react-router-dom';

const Leaderboard = () => {
  return (
    <div>
      <header className="w-full px-8 md:px-16 lg:px-36 py-8 text-center flex justify-between items-center">
        <Link to="/">
          <button className="bg-primary text-myWhite py-2 px-4 text-sm md:text-base md:py-4 md:px-8">
            Main
          </button>
        </Link>
      </header>

      <section className="mySection">
        <div className="flex gap-5 ">
          <Link to="game1">
            <img
              src={BeachThumbnail}
              alt="where is waldo game at the beach"
              className="thumbnails"
            />
          </Link>
          <Link to="game2">
            <img src={SnowThumbnail} alt="where is waldo game in the snow" className="thumbnails" />
          </Link>
          <Link to="game3">
            <img src={SpaceThumbnail} alt="where is waldo game at space" className="thumbnails" />
          </Link>
        </div>
      </section>

      <section className="mySection mb-6">
        <Outlet />
      </section>
    </div>
  );
};

export default Leaderboard;
