import React, { useEffect, useState } from 'react';
import Waldo from '../assets/images/Waldo.jpg';
import Odlaw from '../assets/images/Odlaw.jpg';
import Whitebeard from '../assets/images/Whitebeard.jpg';
import Beach from '../assets/images/beach main.jpg';
import Snow from '../assets/images/snow main.jpg';
import Space from '../assets/images/space main.jpg';
import { useParams, Link } from 'react-router-dom';
import Popup from './Popup';

const Game = () => {
  let params = useParams();
  let gameUrl;
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const dismissModal = (event: any) => {
      if (event.target.id !== 'gamePic') {
        setIsModalOpen(false);
      }
    };
    document.body.addEventListener('click', dismissModal);

    return () => {
      document.body.removeEventListener('click', dismissModal);
    };
  });

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

  const handleImageClick = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    let newX = event.clientX - rect.left; //x position within the element.
    let newY = event.clientY - rect.top; //y position within the element.
    setPosX(newX);
    setPosY(newY);
    console.log('Left? : ' + newX + ' ; Top? : ' + newY + '.');
    setIsModalOpen(true);
  };

  return (
    <div className="px-[30px] md:px-[60px] lg:px-[140px]">
      <header className="w-full px-8 md:px-16 lg:px-36 py-8 text-center flex justify-between items-center">
        <Link to="/">
          <button className="bg-primary text-myWhite py-2 px-4 text-sm md:text-base md:py-4 md:px-8">
            Main
          </button>
        </Link>
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
        <figure className="w-[100%] relative">
          <img
            src={gameUrl}
            alt="Locate the three characters on the beach"
            onClick={handleImageClick}
            id="gamePic"
          />
          <div>{isModalOpen ? <Popup posX={posX} posY={posY} /> : null}</div>
        </figure>
      </section>
      <section>
        <div className="text-center">
          <Link to="/leaderboard">
            <button className="btn">View leaderboards</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Game;
