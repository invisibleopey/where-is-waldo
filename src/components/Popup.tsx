import React from 'react';

type Positions = {
  posX: number;
  posY: number;
};

const Popup = (props: Positions) => {
  return (
    <div
      className=" absolute top-[${}] left-[{posX}]"
      style={{ top: `${props.posY}px`, left: `${props.posX}px` }}
    >
      The Pop Up
    </div>
  );
};

export default Popup;
