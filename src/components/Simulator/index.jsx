import React, {useState} from "react";
import Boxes from "./Boxes";
import Control from "./Control";

const Simulator = () => {
  const [isPickCoinLoading, setIsPickCoinLoading] = useState(false);

  return (
    <>
      <Boxes isLoading />
      <Control isPickCoinLoading={isPickCoinLoading} setIsPickCoinLoading={setIsPickCoinLoading} />
    </>
  );
};

export default Simulator;
