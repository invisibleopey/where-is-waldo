import React from 'react';
import CheckedIcon from '../assets/icons/checked.svg';

const Tag = (props: { coordsY: number; coordsX: number }) => {
  return (
    <img
      src={CheckedIcon}
      alt="Well done, you found one"
      className=" absolute translate-y-[-50%] translate-x-[-50%]"
      style={{ top: `${props.coordsY}px`, left: `${props.coordsX}px` }}
    />
  );
};

export default Tag;
