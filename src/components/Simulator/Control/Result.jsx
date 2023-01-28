import React from "react";

import { Typography } from "antd";

const Result = ({ probabilityValues, showProbability }) => {
  const { Title } = Typography;

  return (
    <div className="w-full h-full bg-gray-200 flex flex-col justify-center items-center p-2">
      {!showProbability && (<Title level={4}>No results to show.</Title>)}
      {showProbability && (<Title level={4}>{`GOLD: ${(probabilityValues.gold * 100).toFixed(2)} %`}</Title>)}
      {showProbability && (<Title level={4}>{`SILVER: ${(probabilityValues.silver * 100).toFixed(2)} %`}</Title>)}
    </div>
  );
};

export default Result;
