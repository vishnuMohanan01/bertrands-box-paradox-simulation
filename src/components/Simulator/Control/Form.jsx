import React, { useState } from "react";

import { isEmpty } from "ramda";

import { Button, Typography, Input } from "antd";
import { pickACoin, runSimulation } from "./utils";

const Form = ({ isPickCoinLoading, setIsPickCoinLoading, setProbabilityValue }) => {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [pickedCoin, setPickedCoin] = useState("");
  const [numberOfSimulations, setNumberOfSimulations] = useState(0);

  const { Title, Text } = Typography;

  const handleClickOnPickACoin = () => pickACoin({ setIsLoading: setIsPickCoinLoading, setPickedCoin });

  const handleClickOnRunSimulations = async () => {
    setIsSimulationRunning(true);
    await runSimulation({ coin: pickedCoin, numberOfSimulations, setProbabilityValue });
    setIsSimulationRunning(false);
  };

  const handleInputChange = e => setNumberOfSimulations(e.target.value);

  return (
    <div className="w-3/5 space-y-8 bg-gray-50 h-full flex flex-col justify-center items-center">
      <Button loading={isPickCoinLoading} onClick={handleClickOnPickACoin} className="w-1/4">
        Pick a coin
      </Button>
      {!isEmpty(pickedCoin) && <Title type="success" level={3} className="mt-4">
        {`Picked up ${pickedCoin.toUpperCase()}!`}
      </Title>}
      <div className="flex space-x-4 mt-8 w-full justify-center items-center">
        <Text type="primary">Number of simulations: </Text>
        <Input disabled={isEmpty(pickedCoin)} onChange={handleInputChange} className="w-1/2" placeholder="enter number" type="number" size="medium" />
      </div>
      <Button disabled={numberOfSimulations < 1} loading={isSimulationRunning} onClick={handleClickOnRunSimulations} className="w-1/4">
        Run Simulations
      </Button>
    </div>
  );
};

export default Form;
