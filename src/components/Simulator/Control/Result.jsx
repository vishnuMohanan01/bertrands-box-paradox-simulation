import React from "react";

import { Typography } from "antd";

const Result = ({ results, showResults }) => {
  const { Title } = Typography;

  return (
    <div className="w-full h-full bg-gray-200 flex flex-col justify-center items-center p-2">
      {!showResults && (<Title level={5}>No results to show.</Title>)}
      {showResults && (<Title level={5}>{`GOLD: ${(results.gold * 100).toFixed(2)} %`}</Title>)}
      {showResults && (<Title level={5}>{`SILVER: ${(results.silver * 100).toFixed(2)} %`}</Title>)}
      {showResults && (<Title level={5}>{`Drawn Gold coins: ${results.coinDrawn.gold}`}</Title>)}
      {showResults && (<Title level={5}>{`Rightly drawn Gold coins: ${results.coinRight.gold}`}</Title>)}
      {showResults && (<Title level={5}>{`Drawn Silver coins: ${results.coinDrawn.silver}`}</Title>)}
      {showResults && (<Title level={5}>{`Rightly drawn Silver coins: ${results.coinRight.silver}`}</Title>)}
    </div>
  );
};

export default Result;
