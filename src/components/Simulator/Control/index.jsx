import React, { useState } from "react";

import { Typography } from "antd";

import { keys} from "ramda";
import Form from "./Form";
import Result from "./Result";
import ProbabilityGraph from "./assets/images/probability_graph.png";

const Control = ({ isPickCoinLoading, setIsPickCoinLoading }) => {
  const [results, setResults] = useState(null);

  const { Title } = Typography;

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
        <Title level={3}>Probabilty graph</Title>
        {doesResultsExist && <img src={ProbabilityGraph} alt="Probability graph" className="max-h-56" />}
      </div>
    </div>
  );
};

export default Control;
