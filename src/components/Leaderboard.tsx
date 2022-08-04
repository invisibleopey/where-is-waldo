import React from 'react';
import BeachThumbnail from '../assets/images/beach thumbnail.png';
import SnowThumbnail from '../assets/images/snow thumbnail.png';
import SpaceThumbnail from '../assets/images/space thumbnail.png';

const Leaderboard = () => {
  return (
    <div>
      <header className="w-full px-8 md:px-16 lg:px-36 py-8 text-center flex justify-between items-center">
        <button className="bg-primary text-myWhite py-2 px-4 text-sm md:text-base md:py-4 md:px-8">
          Main
        </button>
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

      <section className="mySection mb-6">
        <table className="w-[100%]">
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>Opey</td>
            <td>0:20</td>
          </tr>
          <tr>
            <td>Abdul</td>
            <td>0:30</td>
          </tr>
          <tr>
            <td>Rich</td>
            <td>0:35</td>
          </tr>
          <tr>
            <td>Cap</td>
            <td>0:40</td>
          </tr>
          <tr>
            <td>Juice</td>
            <td>0:45</td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Leaderboard;
