import React from 'react';

type Positions = {
  boxPosX: number;
  boxPosY: number;
};

const Popup = (props: Positions) => {
  return (
    <div
      className=" absolute flex text-xs gap-1"
      style={{ top: `${props.boxPosY}px`, left: `${props.boxPosX}px` }}
    >
      <div className=" rounded-full w-8 h-8 md:w-12 md:h-12 border-solid border-[#000000] border-2 translate-y-[-50%] translate-x-[-50%]"></div>
      <div className="flex flex-col">
        <button className="option-btns">Waldo</button>
        <button className="option-btns">Odlaw</button>
        <button className="option-btns">Whitebeard</button>
      </div>
    </div>
  );
};

export default Popup;
