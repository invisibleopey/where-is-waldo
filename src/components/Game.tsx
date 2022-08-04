import React from 'react';
import Waldo from '../assets/images/Waldo.jpg';
import Odlaw from '../assets/images/Odlaw.jpg';
import Whitebeard from '../assets/images/Whitebeard.jpg';
import Beach from '../assets/images/beach main.jpg';
import Snow from '../assets/images/snow main.jpg';
import Space from '../assets/images/space main.jpg';
import { useParams } from 'react-router-dom';

const Game = () => {
  let params = useParams();
  let gameUrl;

  switch (params.gameId) {
    case 'game1':
      gameUrl = Beach;
      break;

    case 'game2':
      gameUrl = Snow;
      break;

    case 'game3':
      gameUrl = Space;
      break;
    default:
      break;
  }

  return (
    <div className="px-[30px] md:px-[60px] lg:px-[140px]">
      <header className="w-full px-8 md:px-16 lg:px-36 py-8 text-center flex justify-between items-center">
        <button className="bg-primary text-myWhite py-2 px-4 text-sm md:text-base md:py-4 md:px-8">
          Main
        </button>
        <div className="flex gap-3 shrink-[2]">
          <figure className="myFigure">
            <img src={Waldo} alt="A close up look of waldo" />
            <figcaption className="text-xs md:text-base">Waldo</figcaption>
          </figure>
          <figure className="myFigure">
            <img src={Odlaw} alt="A close up look of Odlaw" />
            <figcaption className="text-xs md:text-base">Odlaw</figcaption>
          </figure>
          <figure className="myFigure">
            <img src={Whitebeard} alt="A close up look of Whitebeard" />
            <figcaption className="text-xs md:text-base">Whitebeard</figcaption>
          </figure>
        </div>
        <div>00m:00s</div>
      </header>
      <section className="mb-[30px] lg:mb-[70px]">
        <figure className="w-[100%]">
          <img src={gameUrl} alt="Locate the three characters on the beach" />
        </figure>
      </section>
      <section>
        <div className="text-center">
          <button className="btn">View leaderboards</button>
        </div>
      </section>
    </div>
  );
};

export default Game;
