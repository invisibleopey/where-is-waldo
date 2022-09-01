import React, { useEffect, useState } from 'react';
import Waldo from '../assets/images/Waldo.jpg';
import Odlaw from '../assets/images/Odlaw.jpg';
import Whitebeard from '../assets/images/Whitebeard.jpg';
import Beach from '../assets/images/beach main.jpg';
import Snow from '../assets/images/snow main.jpg';
import Space from '../assets/images/space main.jpg';
import { useParams, Link } from 'react-router-dom';
import Popup from './Popup';
import Tag from './Tag';

export type ActualCoords = {
  x: number;
  y: number;
};

export type FoundCharacters = {
  name: string;
  posX: number;
  posY: number;
};

const Game = () => {
  let params = useParams();
  let gameUrl;
  const [boxPosX, setBoxPosX] = useState(0);
  const [boxPosY, setBoxPosY] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [actualCoords, setActualCoords] = useState<ActualCoords>({ x: 0, y: 0 });
  const [foundCharacters, setFoundCharacters] = useState<FoundCharacters[]>([]);

  useEffect(() => {
    const dismissModal = (event: any) => {
      if (event.target.id !== 'gamePic') {
        setOpenModal(false);
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
    const currentGame = event.target;
    const relativeNewX = event.clientX - rect.left;
    const relativeNewY = event.clientY - rect.top;

    // The screen resolutions at which I solved the puzzles
    const widthRatio = 1440 / currentGame.width;
    const heightRatio = 924 / currentGame.height;
    const actualX = Math.round(relativeNewX * widthRatio);
    const actualY = Math.round(relativeNewY * heightRatio);
    setBoxPosX(relativeNewX);
    setBoxPosY(relativeNewY);

    setActualCoords({
      x: actualX,
      y: actualY,
    });

    // TODO: Store actual coords in a state.
    // TODO: When user clicks on one of the pop up button, validate the result. Compare the character selected, with the actual coord in state, against the presolved value. First store this presolved value in the game as a global variable. Then move it to the server side using firestore.

    // console.log('Left? : ' + relativeNewX + ' ; Top? : ' + relativeNewY + '.');
    // console.log('Actual: Left? : ' + actualX + ' ; Top? : ' + actualY + '.');
    setOpenModal(true);
  };

  return (
    <div className="px-[30px]">
      <header className="w-full px-8 md:px-16 lg:px-36 py-8 text-center flex justify-between items-center">
        <Link to="/">
          <button className="bg-primary text-myWhite py-2 px-4 text-sm md:text-base md:py-4 md:px-8">
            Main
          </button>
        </Link>
        <div className="flex gap-3 shrink-[2]">
          <figure className="myFigure">
            <img
              src={Waldo}
              alt="A close up look of waldo"
              className={
                foundCharacters.find((character) => character.name === 'Waldo')
                  ? 'opacity-10'
                  : 'opacity-100'
              }
            />
            <figcaption className="text-xs md:text-base">Waldo</figcaption>
          </figure>
          <figure className="myFigure">
            <img
              src={Odlaw}
              alt="A close up look of Odlaw"
              className={
                foundCharacters.find((character) => character.name === 'Odlaw')
                  ? 'opacity-10'
                  : 'opacity-100'
              }
            />
            <figcaption className="text-xs md:text-base">Odlaw</figcaption>
          </figure>
          <figure className="myFigure">
            <img
              src={Whitebeard}
              alt="A close up look of Whitebeard"
              className={
                foundCharacters.find((character) => character.name === 'Whitebeard')
                  ? 'opacity-10'
                  : 'opacity-100'
              }
            />
            <figcaption className="text-xs md:text-base">Whitebeard</figcaption>
          </figure>
        </div>
        <div>00m:00s</div>
      </header>
      <section className="mb-[30px] lg:mb-[70px] flex">
        <figure className="w-[100%] relative self-center justify-center">
          <img
            src={gameUrl}
            alt="Locate the three characters on the beach"
            onClick={handleImageClick}
            id="gamePic"
          />
          {foundCharacters.length
            ? foundCharacters.map((character) => (
                <Tag coordsX={character.posX} coordsY={character.posY} key={character.name} />
              ))
            : null}
          <div>
            {openModal ? (
              <Popup
                boxPosX={boxPosX}
                boxPosY={boxPosY}
                actualCoords={actualCoords}
                gameId={params.gameId}
                setFoundCharacters={setFoundCharacters}
                foundCharacters={foundCharacters}
              />
            ) : null}
          </div>
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
