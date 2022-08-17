import React from 'react';

type Positions = {
  posX: number;
  posY: number;
};

const Popup = (props: Positions) => {
  return (
    <div
      className=" absolute flex text-xs gap-1"
      style={{ top: `${props.posY - 12}px`, left: `${props.posX - 12}px` }}
    >
      <div className=" rounded-full w-12 h-12 border-solid border-[#000000] border-2"></div>
      <div className="flex flex-col">
        <button className="option-btns">Waldo</button>
        <button className="option-btns">Odlaw</button>
        <button className="option-btns">Whitebeard</button>
      </div>
    </div>
  );
};

export default Popup;
