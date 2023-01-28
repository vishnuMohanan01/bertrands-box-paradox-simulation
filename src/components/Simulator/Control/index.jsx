import React, { useState } from "react";
import { keys} from "ramda";
import Form from "./Form";
import Result from "./Result";
import ProbabilityGraph from "./assets/images/probability_graph.png";

const Control = ({ isPickCoinLoading, setIsPickCoinLoading }) => {
  const [probabilityValues, setProbabilityValues] = useState(null);

  const doesProbabilityValuesExist = !!keys(probabilityValues).length

  return (
    <div className="flex w-full h-full justify-start items-center">
      <div className="w-2/5 h-full flex flex-col justify-start items-center">
        <Form
          setProbabilityValues={setProbabilityValues}
          isPickCoinLoading={isPickCoinLoading}
          setIsPickCoinLoading={setIsPickCoinLoading}
        />
        <Result showProbability={doesProbabilityValuesExist} probabilityValues={probabilityValues} />
      </div>
      <div className="w-3/5 h-full flex flex-col justify-center items-center">
        {doesProbabilityValuesExist && <img src={ProbabilityGraph} alt="Probability graph" className="max-h-64" />}
      </div>
    </div>
  );
};

export default Control;
