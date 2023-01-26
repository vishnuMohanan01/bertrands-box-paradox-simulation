import React from "react";
import { Typography } from "antd";
import Simulator from "./components/Simulator";

const App = () => {
  const { Title } = Typography;
  return (
    <div className="flex flex-col w-screen h-screen justify-start items-center space-y-4">
      <Title className="mt-4">BERTRAND'S BOX PARADOX</Title>
      <ul className="flex flex-col justify-start items-center text-center">
        <li>This model will simulate Bertrand's Box Paradox in the following way:</li>
        <li>It will randomly select one of the three boxes and draw a coin from the box.</li>
        <li>Then it simulates a guess of the remaining coin in the box by guessing the same color of the coin it just drew.</li>
        <li>The final accuracy displayed after the simulation is over proves the correct interpretation of the paradox.</li>
      </ul>
      <Simulator />
  </div>
  );
};

export default App;
