import React from "react";

import { Typography } from "antd";

const Result = ({ results, showResults }) => {
  const { Title } = Typography;

  return (
    <div className="w-full h-full bg-gray-200 flex flex-col justify-center items-center p-2">
      {!showResults && (<Title level={4}>No results to show.</Title>)}
      {showResults && (<Title level={4}>{`GOLD: ${(results.gold * 100).toFixed(2)} %`}</Title>)}
      {showResults && (<Title level={4}>{`SILVER: ${(results.silver * 100).toFixed(2)} %`}</Title>)}
    </div>
  );
};

export default Result;
