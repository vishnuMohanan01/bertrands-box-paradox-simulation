import React, { useEffect, useState } from "react";

import { isEmpty } from "ramda";

import { Button, Typography, Input } from "antd";
import { runSimulation } from "./utils";

const Form = ({ setResults }) => {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [numberOfSimulations, setNumberOfSimulations] = useState(0);

  const { Text } = Typography;

  useEffect(() => {
    if (isEmpty(numberOfSimulations)) setResults(null);
  }, [numberOfSimulations]);

  const handleClickOnRunSimulations = async () => {
    console.log("rafrw 1");
    setIsSimulationRunning(true);
    await runSimulation({ numberOfSimulations, setResults });
    setIsSimulationRunning(false);
  };

  const handleInputChange = e => setNumberOfSimulations(e.target.value);

  return (
    <div className="w-full space-y-8 bg-gray-50 h-full flex flex-col justify-center items-center p-8">
      <div className="flex space-x-4 mt-8 w-full justify-center items-center">
        <Text type="primary">Number of simulations: </Text>
        <Input onChange={handleInputChange} className="w-1/2" placeholder="enter number" type="number" size="medium" />
      </div>
      <Button disabled={numberOfSimulations < 1} loading={isSimulationRunning} onClick={handleClickOnRunSimulations} className="w-1/4">
        Run Simulations
      </Button>
    </div>
  );
};

export default Form;
