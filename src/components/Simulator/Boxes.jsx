import React from 'react'

import BoxImage from "../../images/box.png";

import { NUMBER_OF_BOXES } from './constants';

const Boxes = () => {

  return (
    <div className="flex pt-4">
      {
        Array.from(Array(NUMBER_OF_BOXES).keys()).map((num) => <img src={BoxImage} key={num} />)
      }
    </div>
  )
}

export default Boxes;
