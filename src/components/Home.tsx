import React from 'react';
import BeachThumbnail from '../assets/images/beach thumbnail.png';
import SnowThumbnail from '../assets/images/snow thumbnail.png';
import SpaceThumbnail from '../assets/images/space thumbnail.png';

const Home = () => {
  return (
    <div>
      <header className="w-full px-8 md:px-16 lg:px-36 py-8 text-center">
        <h1>Where’s Waldo? </h1>
      </header>

      <section className="mySection">
        <div className="flex gap-5 ">
          <div>
            <img
              src={BeachThumbnail}
              alt="where is waldo game at the beach"
              className="thumbnails"
            />
          </div>
          <div>
            <img src={SnowThumbnail} alt="where is waldo game in the snow" className="thumbnails" />
          </div>
          <div>
            <img src={SpaceThumbnail} alt="where is waldo game at space" className="thumbnails" />
          </div>
        </div>
      </section>

      <section className="mySection">
        <div className="text-center">
          <button className="btn">View leaderboards</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
