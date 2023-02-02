import React, { useState } from "react";
import { keys} from "ramda";
import Form from "./Form";
import Result from "./Result";
import ProbabilityGraph from "./assets/images/probability_graph.png";

const Control = ({ isPickCoinLoading, setIsPickCoinLoading }) => {
  const [results, setResults] = useState(null);

  const doesResultsExist = !!keys(results).length

  return (
    <div className="flex w-full h-full justify-start items-center">
      <div className="w-2/5 h-full flex flex-col justify-start items-center">
        <Form
          setResults={setResults}
          isPickCoinLoading={isPickCoinLoading}
          setIsPickCoinLoading={setIsPickCoinLoading}
        />
        <Result showResults={doesResultsExist} results={results} />
      </div>
      <div className="w-3/5 h-full flex flex-col justify-center items-center">
        {doesResultsExist && <img src={ProbabilityGraph} alt="Probability graph" className="max-h-64" />}
      </div>
    </div>
  );
};

export default Control;
