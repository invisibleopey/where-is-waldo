import React from 'react';
import { ActualCoords } from './Game';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FoundCharacters } from './Game';

type myProps = {
  boxPosX: number;
  boxPosY: number;
  actualCoords: ActualCoords;
  gameId: string | undefined;
  setFoundCharacters: React.Dispatch<React.SetStateAction<FoundCharacters[]>>;
  foundCharacters: FoundCharacters[];
  setIsSelectionCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const Popup = (props: myProps) => {
  const {
    gameId,
    actualCoords,
    setFoundCharacters,
    foundCharacters,
    boxPosX,
    boxPosY,
    setIsSelectionCorrect,
  } = props;
  const handleSelection = async (event: any) => {
    const selection = event.target.textContent as string;
    const currentGame = gameId as string;
    const docRef = doc(db, currentGame, selection);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const coordsObj = docSnap.data();
      // Cloud function is the better design, not using it because of money
      // 15 is used here to give user some leeway with selection within a range
      const leeway = 15;
      if (
        coordsObj.x <= actualCoords.x + leeway &&
        coordsObj.x >= actualCoords.x - leeway &&
        coordsObj.y <= actualCoords.y + leeway &&
        coordsObj.y >= actualCoords.y - leeway
      ) {
        console.log('You found it');
        handleSuccess(selection);
      } else {
        console.log('Try Again');
        setIsSelectionCorrect(false);
      }
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const handleSuccess = (selection: string) => {
    if (foundCharacters.length === 3) return;
    setFoundCharacters((prevState) => {
      return [
        ...prevState,
        {
          name: selection,
          posX: boxPosX,
          posY: boxPosY,
        },
      ];
    });
    setIsSelectionCorrect(true);
  };
  const handleButtonClass = (buttonText: string) => {
    return foundCharacters.find((character) => character.name === buttonText)
      ? 'hidden'
      : 'option-btns';
  };

  return (
    <div
      className=" absolute flex text-xs gap-1"
      style={{ top: `${boxPosY}px`, left: `${boxPosX}px` }}
    >
      <div className=" rounded-full w-8 h-8 md:w-12 md:h-12 border-solid border-[#000000] border-2 translate-y-[-50%] translate-x-[-50%]"></div>
      <div className="flex flex-col">
        <button className={handleButtonClass('Waldo')} onClick={handleSelection}>
          Waldo
        </button>
        <button className={handleButtonClass('Odlaw')} onClick={handleSelection}>
          Odlaw
        </button>
        <button className={handleButtonClass('Whitebeard')} onClick={handleSelection}>
          Whitebeard
        </button>
      </div>
    </div>
  );
};

export default Popup;
