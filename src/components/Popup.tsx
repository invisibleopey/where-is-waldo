import React from 'react';
import { ActualCoords } from './Game';

type myProps = {
  boxPosX: number;
  boxPosY: number;
  actualCoords: ActualCoords;
  gameId: string | undefined;
  setFoundCharacters: React.Dispatch<React.SetStateAction<never[]>>;
};

const Popup = (props: myProps) => {
  const handleSelection = (event: any) => {
    const { gameId, actualCoords } = props;
    const selection = event.target.textContent as keyof typeof game1;
    const answer = game3[selection];
    // 10 is used here to give user some leeway with selection within a range
    if (answer.x <= actualCoords.x + 10 && answer.x >= actualCoords.x - 10) {
      console.log('You found it');
    } else {
      console.log('Try Again');
    }
  };

  return (
    <div
      className=" absolute flex text-xs gap-1"
      style={{ top: `${props.boxPosY}px`, left: `${props.boxPosX}px` }}
    >
      <div className=" rounded-full w-8 h-8 md:w-12 md:h-12 border-solid border-[#000000] border-2 translate-y-[-50%] translate-x-[-50%]"></div>
      <div className="flex flex-col">
        <button className="option-btns" onClick={handleSelection}>
          Waldo
        </button>
        <button className="option-btns" onClick={handleSelection}>
          Odlaw
        </button>
        <button className="option-btns" onClick={handleSelection}>
          Whitebeard
        </button>
      </div>
    </div>
  );
};

export default Popup;

const game1 = {
  Waldo: {
    x: 890,
    y: 352,
  },
  Odlaw: {
    x: 151,
    y: 322,
  },
  Whitebeard: {
    x: 387,
    y: 324,
  },
};

const game2 = {
  Waldo: {
    x: 1229,
    y: 666,
  },
  Odlaw: {
    x: 456,
    y: 585,
  },
  Whitebeard: {
    x: 97,
    y: 697,
  },
};

const game3 = {
  Waldo: {
    x: 582,
    y: 633,
  },
  Odlaw: {
    x: 101,
    y: 633,
  },
  Whitebeard: {
    x: 1124,
    y: 525,
  },
};

const correctCoords = {
  game1: {
    Waldo: {
      x: 890,
      y: 352,
    },
    Odlaw: {
      x: 151,
      y: 322,
    },
    Whitebeard: {
      x: 387,
      y: 324,
    },
  },
  game2: {
    Waldo: {
      x: 1229,
      y: 666,
    },
    Odlaw: {
      x: 456,
      y: 585,
    },
    Whitebeard: {
      x: 97,
      y: 697,
    },
  },
  game3: {
    Waldo: {
      x: 582,
      y: 633,
    },
    Odlaw: {
      x: 101,
      y: 633,
    },
    Whitebeard: {
      x: 1124,
      y: 525,
    },
  },
};
